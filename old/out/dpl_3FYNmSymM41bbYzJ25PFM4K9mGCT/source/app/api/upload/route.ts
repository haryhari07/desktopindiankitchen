import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { writeFile, mkdir, unlink, readdir, stat } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { cookies } from 'next/headers';
import { put, del } from '@vercel/blob';

// Use Route Segment Config instead of deprecated config object
export const maxDuration = 60; // 60 seconds
export const dynamic = 'force-dynamic';

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

export async function POST(request: Request) {
  try {
    const user = await getUser();

    if (!user) {
      console.error('Upload failed: No valid session found');
      return NextResponse.json({ error: 'Unauthorized: Please log in as admin' }, { status: 401 });
    }

    if (user.role !== 'admin') {
      console.error('Upload failed: User is not an admin', { email: user.email, role: user.role });
      return NextResponse.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: 'No file uploaded or invalid file' }, { status: 400 });
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Only image files are allowed' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Create unique filename base - remove special chars and spaces
    const safeName = file.name
      .replace(/[^a-z0-9.]/gi, '-')
      .toLowerCase()
      .replace(/\.[^/.]+$/, "");
    
    // Always aim for .webp as requested by user
    const finalFilename = `${Date.now()}-${safeName}.webp`;
    
    let optimizedBuffer: Buffer;
    let contentType = 'image/webp';
    
    try {
      // Optimize image: resize to max 1200px width/height, convert to WebP
      // Using a try-catch for sharp because it can fail in some serverless environments
      optimizedBuffer = await sharp(buffer)
        .resize(1200, 1200, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .webp({ 
          quality: 80, 
          effort: 6,
          smartSubsample: true 
        })
        .toBuffer();
        
      console.log('Image optimized locally with sharp');
    } catch (sharpError) {
      console.error('Sharp optimization failed, using original buffer:', sharpError);
      optimizedBuffer = buffer;
      contentType = file.type; // Keep original content type
    }

    // Check for Vercel Environment or Blob Token
    const hasBlobToken = !!process.env.BLOB_READ_WRITE_TOKEN;
    const isVercel = !!process.env.VERCEL;

    console.log('Upload Debug:', { 
      hasToken: hasBlobToken, 
      tokenPrefix: process.env.BLOB_READ_WRITE_TOKEN?.substring(0, 10),
      isVercel,
      env: process.env.NODE_ENV 
    });

    if (hasBlobToken) {
      try {
        console.log('Attempting Vercel Blob upload...');
        // Note: If your store is "Private", you cannot use access: 'public'.
        // However, for a recipe site, "Public" access is usually desired so images can be seen by everyone.
        const blob = await put(`temp-uploads/${finalFilename}`, optimizedBuffer, {
          access: 'public', 
          contentType: contentType,
          addRandomSuffix: true,
        });
        console.log('SUCCESS: Image uploaded to Vercel Blob:', blob.url);
        return NextResponse.json({ url: blob.url });
      } catch (blobError: any) {
        console.error('ERROR: Vercel Blob upload failed:', blobError);
        
        // If the error is about Private vs Public access, we try without the access flag 
        // to use the store's default setting.
        if (blobError?.message?.includes('private store')) {
          try {
            console.log('Retrying upload with default store access...');
            const blob = await put(`temp-uploads/${finalFilename}`, optimizedBuffer, {
              access: 'public', // Must provide access in PutCommandOptions even if it fails later, or use a specific value
              contentType: contentType,
              addRandomSuffix: true,
            });
            return NextResponse.json({ url: blob.url });
          } catch (retryError) {
            console.error('Retry failed:', retryError);
          }
        }

        if (isVercel) {
          return NextResponse.json({ 
            error: 'Vercel Blob upload failed.',
            details: blobError instanceof Error ? blobError.message : String(blobError)
          }, { status: 500 });
        }
      }
    } else if (isVercel) {
      // On Vercel but no Blob token - this is the likely cause of failure
      console.error('CRITICAL ERROR: BLOB_READ_WRITE_TOKEN is missing on Vercel environment');
      return NextResponse.json({ 
        error: 'Missing Vercel Blob token. Please connect Vercel Blob to your project.',
        instruction: 'Go to Vercel Dashboard -> Storage -> Connect Vercel Blob and then RE-DEPLOY your app.'
      }, { status: 400 });
    }

    // FALLBACK to local FS (Only for Localhost development)
    console.log('Falling back to local file system upload (Development)');
    const uploadDir = path.join(process.cwd(), 'public', 'temp-uploads');
    try {
        await mkdir(uploadDir, { recursive: true });
    } catch (err) {}

    // CLEANUP local temp folder (Only for Localhost)
    try {
      const files = await readdir(uploadDir);
      const now = Date.now();
      const oneHour = 60 * 60 * 1000;
      for (const tempFile of files) {
        const tempPath = path.join(uploadDir, tempFile);
        const stats = await stat(tempPath);
        if (now - stats.mtimeMs > oneHour) {
          await unlink(tempPath).catch(() => {});
        }
      }
    } catch (cleanupErr) {}

    const filePath = path.join(uploadDir, finalFilename);
    await writeFile(filePath, optimizedBuffer);
    return NextResponse.json({ url: `/temp-uploads/${finalFilename}` });

  } catch (error) {
    console.error('General Upload error:', error);
    return NextResponse.json({ 
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const user = await getUser();

    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json({ error: 'No URL provided' }, { status: 400 });
    }

    // Handle Vercel Blob deletion
    if (url.startsWith('https://') && url.includes('public.blob.vercel-storage.com')) {
      try {
        await del(url);
        console.log('Deleted image from Vercel Blob:', url);
        return NextResponse.json({ success: true });
      } catch (blobError) {
        console.error('Failed to delete from Vercel Blob:', blobError);
        return NextResponse.json({ error: 'Failed to delete from cloud storage' }, { status: 500 });
      }
    }

    // Handle Local FS deletion
    let folder = '';
    if (url.startsWith('/recipes/')) {
      folder = 'recipes';
    } else if (url.startsWith('/temp-uploads/')) {
      folder = 'temp-uploads';
    } else {
      return NextResponse.json({ error: 'Invalid URL prefix' }, { status: 400 });
    }

    const filename = url.split('/').pop();
    if (!filename) {
      return NextResponse.json({ error: 'Invalid filename' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'public', folder, filename);
    
    try {
      await unlink(filePath);
      console.log(`Deleted image from local ${folder}:`, filename);
      return NextResponse.json({ success: true });
    } catch (err) {
      console.error('Failed to delete local file:', err);
      return NextResponse.json({ error: 'File not found or cannot be deleted' }, { status: 404 });
    }

  } catch (error) {
    console.error('Delete image error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
