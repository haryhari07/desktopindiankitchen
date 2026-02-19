import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

    if (!email) {
      return NextResponse.json({ success: true });
    }

    const token = await db.createPasswordResetToken(email);

    if (token) {
      const baseUrl =
        process.env.NEXTAUTH_URL ||
        process.env.NEXT_PUBLIC_APP_URL ||
        'http://localhost:3000';
      const resetUrl = `${baseUrl}/reset-password?token=${encodeURIComponent(token)}`;

      if (process.env.NODE_ENV !== 'production') {
        console.log('Password reset link:', resetUrl);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({ success: true });
  }
}

