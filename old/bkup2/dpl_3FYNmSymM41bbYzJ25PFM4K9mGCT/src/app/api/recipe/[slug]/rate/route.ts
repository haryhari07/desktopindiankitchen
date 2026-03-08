import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { cookies } from 'next/headers';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const slug = (await params).slug;
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('session_id')?.value;
    
    let userRating = null;

    if (sessionId) {
      const session = await db.getSession(sessionId);
      if (session) {
        const rating = await db.getRating(session.userId, slug);
        if (rating) {
          userRating = rating.rating;
        }
      }
    }

    const average = await db.getRecipeAverageRating(slug);

    let averageRating = average?.average ?? null;
    let reviewCount = average?.count ?? 0;

    if (!average) {
      const recipe = await db.getRecipe(slug);
      if (recipe) {
        averageRating = typeof recipe.rating === 'number' ? recipe.rating : null;
        reviewCount = typeof recipe.reviewCount === 'number' ? recipe.reviewCount : 0;
      }
    }

    return NextResponse.json({
      userRating,
      averageRating,
      reviewCount
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const slug = (await params).slug;
    const { rating } = await request.json();

    const cookieStore = await cookies();
    const sessionId = cookieStore.get('session_id')?.value;

    if (!sessionId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const session = await db.getSession(sessionId);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Invalid rating' }, { status: 400 });
    }

    await db.upsertRating(session.userId, slug, rating);
    
    const average = await db.getRecipeAverageRating(slug);

    return NextResponse.json({
      success: true,
      averageRating: average?.average,
      reviewCount: average?.count
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
