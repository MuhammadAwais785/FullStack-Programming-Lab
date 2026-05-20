'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#d1e2e9] to-white">
      <Header />
      <Logo />
      <Navigation />

      {/* MAIN SECTION */}
      <div className="w-full flex-grow flex flex-col items-center py-6 px-4">
        <div className="w-full max-w-[1020px]">
          <div className="w-full bg-white pt-7 px-8 pb-10 shadow-sm min-h-[400px]">
            {/* Breadcrumb */}
            <div className="text-[10px] mb-5 pl-[2px] flex items-center gap-1 font-semibold text-gray-500">
              <Link href="/" className="text-[#2b6eb5] hover:underline">Home</Link>
              <span className="text-black text-[9px] mb-[1px] font-bold">&gt;</span>
              <span className="text-black font-semibold">Forgot Password</span>
            </div>

            {/* Title */}
            <h2 className="text-[20px] font-bold text-black mb-4 tracking-tight pl-[2px]">
              Forgot Your Password?
            </h2>

            {submitted ? (
              <div className="bg-[#f0f0f0] pt-8 px-6 sm:px-10 pb-8">
                <div className="max-w-[400px]">
                  <div className="bg-green-50 border border-green-200 p-4 rounded mb-6">
                    <p className="text-[14px] text-green-800">
                      ✓ Password reset link has been sent to your email address. Please check your inbox and follow the instructions to reset your password.
                    </p>
                  </div>
                  <Link href="/login" className="text-[#2b6eb5] hover:underline text-[14px]">
                    Back to Login
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-[#f0f0f0] pt-8 px-6 sm:px-10 pb-8">
                <p className="text-[12px] text-gray-600 mb-6 max-w-[500px]">
                  Please enter your email address and we&apos;ll send you instructions to reset your password.
                </p>

                <form onSubmit={handleSubmit} className="max-w-[400px]">
                  <div className="flex items-center mb-6">
                    <label className="w-[100px] text-[11px] font-bold text-black text-right pr-4">
                      Email <span className="text-[#eb1b23]">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="flex gap-4 ml-[104px]">
                    <button
                      type="submit"
                      className="bg-[#eb1b23] text-white font-bold px-[20px] py-[6px] text-[11px] hover:bg-red-700 transition-colors"
                    >
                      RESET PASSWORD
                    </button>
                    <Link href="/login" className="text-[11px] text-[#2b6eb5] hover:underline pt-1.5">
                      Back to Login
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
