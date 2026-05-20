'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    setSubmitted(true);
  };

  return (
    <div className="container-custom py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Forgot Password</h1>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h2 className="text-xl font-bold text-green-800 mb-4">Check Your Email</h2>
            <p className="text-green-700 mb-6">
              We&apos;ve sent a password reset link to <strong>{email}</strong>. Please check your inbox
              and follow the instructions to reset your password.
            </p>
            <p className="text-sm text-green-600 mb-6">
              If you don&apos;t see the email, please check your spam folder.
            </p>
            <Link href="/auth/login">
              <button className="text-orange-500 hover:text-orange-600 font-semibold">
                Back to Login
              </button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 border border-gray-200 rounded-lg">
            <p className="text-gray-600 text-center mb-6">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>

            {/* Email */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
                placeholder="your@email.com"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition"
            >
              Send Reset Link
            </button>

            {/* Back to Login */}
            <div className="text-center">
              <Link href="/auth/login" className="text-orange-500 hover:text-orange-600 text-sm font-semibold">
                Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
