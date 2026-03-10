
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { cookies } from 'next/headers';
import { rename, stat, mkdir } from 'fs/promises';
import path from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { put, del } from '@vercel/blob';

async function getUser() {
  // 1. Try NextAuth session
  const session = await getServerSession(authOptions);
  if (session && session.user && session.user.email) {
    return db.findUserByEmail(session.user.email);
  }

  // 2. Try Custom Auth (cookie) if no NextAuth user found
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('session_id')?.value;
  if (sessionId) {
    const dbSession = await db.getSession(sessionId);
    if (dbSession) {
      return db.findUserById(dbSession.userId);
    }
  }
  return null;
}

export async function GET() {
  const recipes = await db.getRecipes();
  return NextResponse.json({ recipes });
}

export async function POST(request: Request) {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'slug', 'state', 'region', 'description'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Move image from temp to recipes and rename (Only for local FS)
    if (body.imageUrl) {
        // Case 1: Image is in local temp-uploads (Localhost development)
        if (body.imageUrl.startsWith('/temp-uploads/')) {
            const oldFilename = body.imageUrl.split('/').pop();
            if (oldFilename) {
                const oldPath = path.join(process.cwd(), 'public', 'temp-uploads', oldFilename);
                const extension = path.extname(oldFilename);
                const newFilename = `${body.slug}${extension}`;
                const recipesDir = path.join(process.cwd(), 'public', 'recipes');
                const newPath = path.join(recipesDir, newFilename);
                
                try {
                    // Ensure recipes directory exists
                    await mkdir(recipesDir, { recursive: true });
                    // Check if temp file exists
                    await stat(oldPath);
                    // Move and Rename
                    await rename(oldPath, newPath);
                    // Update body
                    body.imageUrl = `/recipes/${newFilename}`;
                    console.log(`Moved and renamed image from ${oldFilename} to ${newFilename}`);
                } catch (err) {
                    console.error('Failed to move image from temp:', err);
                }
            }
        } 
        // Case 2: Image is already in local recipes folder
        else if (body.imageUrl.startsWith('/recipes/')) {
             const oldFilename = body.imageUrl.split('/').pop();
             // Only rename if the filename doesn't match the new slug
             if (oldFilename && !oldFilename.startsWith(body.slug)) {
                 const recipesDir = path.join(process.cwd(), 'public', 'recipes');
                 const oldPath = path.join(recipesDir, oldFilename);
                 const extension = path.extname(oldFilename);
                 const newFilename = `${body.slug}${extension}`;
                 const newPath = path.join(recipesDir, newFilename);
                 
                 try {
                     await mkdir(recipesDir, { recursive: true });
                     await stat(oldPath);
                     await rename(oldPath, newPath);
                     body.imageUrl = `/recipes/${newFilename}`;
                     console.log(`Renamed existing recipe image from ${oldFilename} to ${newFilename}`);
                 } catch (err) {
                     console.error('Failed to rename existing image:', err);
                 }
             }
        }
        // Case 3: Image is in Vercel Blob (Cloud Storage)
        else if (body.imageUrl.startsWith('https://') && body.imageUrl.includes('public.blob.vercel-storage.com')) {
            try {
              const url = new URL(body.imageUrl);
              const pathname = url.pathname;
              const filename = pathname.split('/').pop();
              const isTempUpload = pathname.includes('/temp-uploads/');

              if (isTempUpload && filename) {
                const dotIndex = filename.lastIndexOf('.');
                const extension = dotIndex >= 0 ? filename.slice(dotIndex) : '.webp';
                const response = await fetch(body.imageUrl);
                if (!response.ok) {
                  return NextResponse.json({ error: 'Failed to read uploaded image' }, { status: 400 });
                }
                const arrayBuffer = await response.arrayBuffer();
                const contentType = response.headers.get('content-type') ?? 'image/webp';
                const newFilename = `${body.slug}-${Date.now()}${extension}`;
                const newBlob = await put(`recipes/${newFilename}`, Buffer.from(arrayBuffer), {
                  access: 'public',
                  contentType,
                  addRandomSuffix: false,
                });
                await del(body.imageUrl).catch(() => {});
                body.imageUrl = newBlob.url;
              }
            } catch (err) {
              console.error('Failed to finalize cloud image:', err);
            }
        }
    }

    try {
      const newRecipe = await db.createRecipe(body);
      return NextResponse.json({ recipe: newRecipe }, { status: 201 });
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Failed to create recipe';
      return NextResponse.json({ error: message }, { status: 400 });
    }

  } catch (error) {
    console.error('Create recipe error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
