'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ResetPasswordInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token') || '';
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!token) {
      setError('Reset link is invalid.');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to reset password');
      }

      setStatus('done');
      setTimeout(() => {
        router.push('/signin');
      }, 1500);
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Something went wrong. Please try again.';
      setError(message);
      setStatus('idle');
    }
  };

  if (!token) {
    return (
      <div className="min-h-[calc(100vh-120px)] bg-[var(--ak-bg-soft)] flex items-center justify-center px-4 py-10">
        <div className="max-w-md w-full text-center">
          <h1 className="section-title text-2xl mb-3">Invalid reset link</h1>
          <p className="section-subtitle text-sm mb-6">
            The password reset link is missing or invalid.
          </p>
          <Link href="/forgot-password" className="text-[var(--ak-primary)] text-sm hover:underline">
            Request a new reset link
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-120px)] bg-[var(--ak-bg-soft)] flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white border border-[var(--ak-border)] shadow-sm mb-4">
            <span className="text-2xl">🔒</span>
          </div>
          <h1 className="section-title text-3xl mb-2">
            Choose a new password
          </h1>
          <p className="section-subtitle text-sm">
            Your new password should be secure and easy for you to remember.
          </p>
        </div>

        <div className="card bg-white overflow-hidden">
          <div className="px-6 py-7">
            {status === 'done' ? (
              <div className="space-y-4 text-center">
                <p className="text-sm text-gray-700">
                  Your password has been updated.
                </p>
                <p className="text-xs text-gray-500">
                  Redirecting you to the sign in page.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-3 text-xs text-red-600 bg-red-50 rounded-md border border-red-100">
                    {error}
                  </div>
                )}
                <div className="space-y-1.5">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    New password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-[var(--ak-border)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ak-primary)] focus:border-[var(--ak-primary)] bg-[var(--ak-bg-soft)]"
                    placeholder="Enter a new password"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-md border border-[var(--ak-border)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ak-primary)] focus:border-[var(--ak-primary)] bg-[var(--ak-bg-soft)]"
                    placeholder="Re-enter your new password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center mt-2 disabled:opacity-50"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Updating password...' : 'Update password'}
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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordInner />
    </Suspense>
  );
}
