
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { cookies } from 'next/headers';
import { unlink, rename, stat, mkdir } from 'fs/promises';
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

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(request: Request, { params }: Props) {
  try {
    const { slug } = await params;
    const recipe = await db.getRecipe(slug);

    if (!recipe) {
      return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
    }

    return NextResponse.json(recipe);
  } catch (error) {
    console.error('Get recipe error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Props) {
  try {
    const { slug } = await params;
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const recipe = await db.getRecipe(slug);
    const imageUrl = recipe?.imageUrl;

    const deleted = await db.deleteRecipe(slug);
    if (deleted) {
      // If recipe deleted successfully, try to delete image
      if (imageUrl && imageUrl.startsWith('/recipes/')) {
        const filename = imageUrl.split('/').pop();
        if (filename) {
          const filePath = path.join(process.cwd(), 'public', 'recipes', filename);
          try {
            await unlink(filePath);
            console.log(`Deleted image: ${filename}`);
          } catch (err) {
            console.error('Failed to delete image file:', err);
            // Don't fail the request if image delete fails, as recipe is already gone
          }
        }
      }
      if (imageUrl && imageUrl.startsWith('https://') && imageUrl.includes('public.blob.vercel-storage.com')) {
        await del(imageUrl).catch((err) => console.error('Failed to delete image from blob:', err));
      }

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
    }

  } catch (error) {
    console.error('Delete recipe error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: Props) {
  try {
    const { slug } = await params;
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const currentRecipe = await db.getRecipe(slug);

    // Handle Image Update (Move from temp to recipes)
    if (body.imageUrl && body.imageUrl.startsWith('/temp-uploads/')) {
      const oldFilename = body.imageUrl.split('/').pop();
      if (oldFilename) {
        const oldPath = path.join(process.cwd(), 'public', 'temp-uploads', oldFilename);
        const extension = path.extname(oldFilename);
        // Use the slug for the filename to keep it consistent
        const newFilename = `${slug}-${Date.now()}${extension}`; 
        const recipesDir = path.join(process.cwd(), 'public', 'recipes');
        const newPath = path.join(recipesDir, newFilename);

        try {
          // Ensure recipes directory exists
          await mkdir(recipesDir, { recursive: true });
          // Check if temp file exists
          await stat(oldPath);
          // Move and Rename
          await rename(oldPath, newPath);
          // Update body with new path
          body.imageUrl = `/recipes/${newFilename}`;
          console.log(`Moved new image from ${oldFilename} to ${newFilename}`);

          // Delete OLD image if it exists and is different
          if (currentRecipe && currentRecipe.imageUrl && currentRecipe.imageUrl !== body.imageUrl) {
             if (currentRecipe.imageUrl.startsWith('/recipes/')) {
                const oldImageName = currentRecipe.imageUrl.split('/').pop();
                if (oldImageName) {
                    const oldImagePath = path.join(recipesDir, oldImageName);
                    await unlink(oldImagePath).catch(err => console.error('Failed to delete old image:', err));
                    console.log('Deleted old image:', oldImageName);
                }
             }
          }

        } catch (err) {
          console.error('Failed to move image from temp:', err);
        }
      }
    }
    if (
      body.imageUrl &&
      body.imageUrl.startsWith('https://') &&
      body.imageUrl.includes('public.blob.vercel-storage.com') &&
      body.imageUrl.includes('/temp-uploads/')
    ) {
      try {
        const url = new URL(body.imageUrl);
        const filename = url.pathname.split('/').pop();
        if (filename) {
          const dotIndex = filename.lastIndexOf('.');
          const extension = dotIndex >= 0 ? filename.slice(dotIndex) : '.webp';
          const response = await fetch(body.imageUrl);
          if (!response.ok) {
            return NextResponse.json({ error: 'Failed to read uploaded image' }, { status: 400 });
          }
          const arrayBuffer = await response.arrayBuffer();
          const contentType = response.headers.get('content-type') ?? 'image/webp';
          const newFilename = `${slug}-${Date.now()}${extension}`;
          const newBlob = await put(`recipes/${newFilename}`, Buffer.from(arrayBuffer), {
            access: 'public',
            contentType,
            addRandomSuffix: false,
          });
          await del(body.imageUrl).catch(() => {});
          body.imageUrl = newBlob.url;

          if (
            currentRecipe?.imageUrl &&
            currentRecipe.imageUrl !== body.imageUrl &&
            currentRecipe.imageUrl.startsWith('https://') &&
            currentRecipe.imageUrl.includes('public.blob.vercel-storage.com')
          ) {
            await del(currentRecipe.imageUrl).catch((err) => console.error('Failed to delete old blob image:', err));
          }
        }
      } catch (err) {
        console.error('Failed to finalize cloud image:', err);
      }
    }

    const updatedRecipe = await db.updateRecipe(slug, body);

    if (updatedRecipe) {
      return NextResponse.json({ recipe: updatedRecipe });
    } else {
      return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
    }

  } catch (error) {
    console.error('Update recipe error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
