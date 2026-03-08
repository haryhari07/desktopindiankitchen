'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error('Failed to request password reset');
      }

      setStatus('done');
    } catch {
      setError('Something went wrong. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] bg-[var(--ak-bg-soft)] flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white border border-[var(--ak-border)] shadow-sm mb-4">
            <span className="text-2xl">🔑</span>
          </div>
          <h1 className="section-title text-3xl mb-2">
            Reset your password
          </h1>
          <p className="section-subtitle text-sm">
            Enter the email you use for Indian Kitchen. If an account exists, we will help you reset your password.
          </p>
        </div>

        <div className="card bg-white overflow-hidden">
          <div className="px-6 py-7">
            {status === 'done' ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  If an account exists with that email, a password reset link has been created.
                </p>
                <p className="text-xs text-gray-500">
                  In this local setup, the reset link is logged in the server console. In production you would send it by email.
                </p>
                <Link
                  href="/signin"
                  className="inline-flex items-center text-sm text-[var(--ak-primary)] hover:underline"
                >
                  Back to sign in
                </Link>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-3 text-xs text-red-600 bg-red-50 rounded-md border border-red-100">
                    {error}
                  </div>
                )}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-[var(--ak-border)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ak-primary)] focus:border-[var(--ak-primary)] bg-[var(--ak-bg-soft)]"
                    placeholder="you@example.com"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center mt-2 disabled:opacity-50"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending link...' : 'Send reset link'}
                </button>
                <div className="text-xs text-gray-500 text-center mt-4">
                  <Link href="/signin" className="text-[var(--ak-primary)] hover:underline">
                    Back to sign in
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
