'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { loginEmail, loginPassword, rememberMe });
  };

  const handleCreateAccount = () => {
    console.log('Create new account');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#d1e2e9] to-white">
      <Header />
      <Logo />
      <Navigation />

      {/* MAIN SECTION */}
      <div className="w-full flex-grow flex flex-col items-center py-6 px-4">
        <div className="w-full max-w-[1020px]">
          {/* WHITE CONTAINER */}
          <div className="w-full bg-white border border-gray-200 pt-7 px-8 pb-10 shadow-sm min-h-[500px]">
            {/* Breadcrumb */}
            <div className="text-[10px] mb-5 pl-[2px] flex items-center gap-1 font-semibold text-gray-500">
              <Link href="/" className="text-[#2b6eb5] hover:underline">Home</Link>
              <span className="text-black text-[9px] mb-[1px] font-bold">&gt;</span>
              <span className="text-black font-semibold">My account</span>
            </div>

            {/* Title */}
            <h2 className="text-[20px] font-bold text-black mb-4 tracking-tight pl-[2px]">
              Login Or Create Account
            </h2>

            {/* Form Container */}
            <div className="bg-[#f0f0f0] pt-8 px-6 sm:px-10 pb-8 rounded-[1px]">
              <div className="flex flex-col md:flex-row gap-0">
                {/* Left Column: User Login Details */}
                <div className="w-full md:w-1/2 pr-0 md:pr-10 border-0 md:border-r border-[#d4d4d4]">
                  <h3 className="text-[13px] font-bold text-black mb-[14px]">User Login Details</h3>
                  <p className="text-[10px] text-black mb-3">Please sign in below with your login information.</p>
                  <p className="text-[10px] text-black mb-5">
                    <span className="text-[#eb1b23]">*</span>Required Fields
                  </p>

                  <form onSubmit={handleLoginSubmit}>
                    <div className="flex flex-col gap-[12px] max-w-[340px]">
                      <div className="flex items-center">
                        <label className="w-[85px] text-[11px] font-bold text-black text-right pr-4 flex-shrink-0">
                          Email <span className="text-[#eb1b23]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="w-[85px] text-[11px] font-bold text-black text-right pr-4 flex-shrink-0">
                          Password <span className="text-[#eb1b23]">*</span>
                        </label>
                        <input
                          type="password"
                          required
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="flex-grow border border-[#cccccc] h-[26px] px-2 text-[11px] focus:outline-none focus:border-[#eb1b23]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <input
                        type="checkbox"
                        id="remember"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="mt-[1px] cursor-pointer accent-gray-400"
                      />
                      <label htmlFor="remember" className="text-[10px] text-black cursor-pointer pt-[2px]">
                        Remember me the next time i visit
                      </label>
                    </div>
                    <div className="flex items-center gap-5 mt-5">
                      <button
                        type="submit"
                        className="bg-[#eb1b23] text-white font-bold px-[20px] py-[6px] text-[11px] hover:bg-red-700 transition-colors"
                      >
                        SIGN IN
                      </button>
                      <Link href="/forgot-password" className="text-[10.5px] text-[#2b6eb5] hover:underline">
                        Forgot your password?
                      </Link>
                    </div>
                  </form>
                </div>

                {/* Right Column: New Customer */}
                <div className="w-full md:w-1/2 pl-0 md:pl-10 mt-10 md:mt-0">
                  <h3 className="text-[13px] font-bold text-black mb-[14px]">New Customer</h3>
                  <p className="text-[10px] text-black mb-[10px]">As a registered HotSpring customer you can:</p>
                  <ul className="list-disc pl-[14px] text-[10px] text-black space-y-[4px] mb-[18px]">
                    <li>Save billing &amp; shipping information.</li>
                    <li>Check your order status.</li>
                    <li>Track your delivery status.</li>
                    <li>View your order history.</li>
                  </ul>
                  <Link href="/register">
                    <button
                      type="button"
                      onClick={handleCreateAccount}
                      className="bg-[#eb1b23] text-white font-bold px-[20px] py-[6px] text-[11px] hover:bg-red-700 transition-colors mt-[2px]"
                    >
                      CREATE NEW ACCOUNT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
