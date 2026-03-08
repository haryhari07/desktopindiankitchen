import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/lib/db';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

export async function GET() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('session_id')?.value;

  if (!sessionId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const session = await db.getSession(sessionId);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const recipes = await db.getUserGeneratedRecipes(session.userId);
  return NextResponse.json({ recipes });
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('session_id')?.value;

  if (!sessionId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const session = await db.getSession(sessionId);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const {
    title,
    description,
    prepTime,
    cookTime,
    servings,
    ingredients,
    instructions,
    tips,
    prompt,
    imageUrl,
  } = body;

  if (
    !title ||
    !description ||
    !prepTime ||
    !cookTime ||
    !servings ||
    !Array.isArray(ingredients) ||
    !Array.isArray(instructions)
  ) {
    return NextResponse.json({ error: 'Invalid recipe data' }, { status: 400 });
  }

  const existingCount = await db.getGeneratedRecipeCountForUser(session.userId);
  if (existingCount >= 3) {
    return NextResponse.json(
      {
        error:
          'Aap sirf 3 Genie recipes save kar sakte hain. Nayi recipe save karne se pehle ek purani recipe delete karein.',
      },
      { status: 400 }
    );
  }

  let optimizedImageUrl: string | undefined = undefined;

  if (typeof imageUrl === 'string' && imageUrl.length > 0) {
    if (imageUrl.startsWith('data:image')) {
      const match = imageUrl.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,(.+)$/);
      if (match) {
        const base64Data = match[2];
        try {
          const buffer = Buffer.from(base64Data, 'base64');
          const uploadDir = path.join(process.cwd(), 'public', 'genie');
          try {
            await mkdir(uploadDir, { recursive: true });
          } catch {
          }
          const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.webp`;
          const filePath = path.join(uploadDir, filename);
          try {
            await sharp(buffer)
              .resize(1200, 1200, {
                fit: 'inside',
                withoutEnlargement: true,
              })
              .webp({
                quality: 75,
                effort: 6,
                smartSubsample: true,
              })
              .toFile(filePath);
          } catch {
            await writeFile(filePath, buffer);
          }
          optimizedImageUrl = `/genie/${filename}`;
        } catch {
        }
      }
    } else if (imageUrl.startsWith('/')) {
      optimizedImageUrl = imageUrl;
    }
  }

  const saved = await db.createGeneratedRecipe(session.userId, {
    title,
    description,
    prepTime,
    cookTime,
    servings,
    ingredients,
    instructions,
    tips,
    prompt,
    imageUrl: optimizedImageUrl,
  });

  return NextResponse.json({ recipe: saved });
}

export async function DELETE(request: Request) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('session_id')?.value;

  if (!sessionId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const session = await db.getSession(sessionId);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { id } = body ?? {};

  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Invalid recipe id' }, { status: 400 });
  }

  const deleted = await db.deleteGeneratedRecipeForUser(session.userId, id);
  if (!deleted) {
    return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
  }

  try {
    if (deleted.imageUrl && typeof deleted.imageUrl === 'string') {
      const relativePath = deleted.imageUrl.replace(/^\/+/, '');
      const filePath = path.join(process.cwd(), 'public', relativePath);
      try {
        const { unlink } = await import('fs/promises');
        await unlink(filePath);
      } catch {
      }
    }
  } catch {
  }

  return NextResponse.json({ success: true });
}
