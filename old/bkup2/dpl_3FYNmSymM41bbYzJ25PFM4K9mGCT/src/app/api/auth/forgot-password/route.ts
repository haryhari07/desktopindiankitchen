import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resendFrom = process.env.RESET_EMAIL_FROM;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

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

      if (resend && resendFrom) {
        try {
          await resend.emails.send({
            from: resendFrom,
            to: email,
            subject: 'Reset your Indian Kitchen password',
            html: `
              <p>Hello,</p>
              <p>You requested to reset your password for Indian Kitchen.</p>
              <p><a href="${resetUrl}">Click here to reset your password</a></p>
              <p>If you did not request this, you can safely ignore this email.</p>
            `,
          });
        } catch (error) {
          console.error('Error sending reset email:', error);
          if (process.env.NODE_ENV !== 'production') {
            console.log('Password reset link:', resetUrl);
          }
        }
      } else if (process.env.NODE_ENV !== 'production') {
        console.log('Password reset link:', resetUrl);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({ success: true });
  }
}
