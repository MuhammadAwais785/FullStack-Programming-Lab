'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* COLUMN 1: ABOUT */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-gray-700">
              HOTSPRING®
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Premium portable spas and hot tubs for relaxation and wellness.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: INFORMATION */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-gray-700">INFORMATION</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-red-600 transition">ABOUT US</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">CUSTOMER SERVICE</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">PRIVACY POLICY</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">SITE MAP</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">SEARCH TERMS</a></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-red-600 transition">CONTACT US</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: MY ACCOUNT */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-gray-700">MY ACCOUNT</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/login" className="text-gray-400 hover:text-red-600 transition">SIGN IN</Link></li>
              <li><Link href="/cart" className="text-gray-400 hover:text-red-600 transition">VIEW CART</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition">MY WISH LIST</a></li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-gray-700">
              SIGNUP FOR A NEWSLETTER
            </h3>
            <div className="mb-4">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL HERE"
                className="w-full px-4 py-2 rounded text-sm text-gray-900 bg-white focus:outline-none mb-2"
              />
              <button className="w-full bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition text-sm">
                SUBSCRIBE
              </button>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-2">PAYMENT SOLUTIONS</p>
              <div className="flex gap-2 flex-wrap">
                <img src="/maestro.png" alt="maestro" className="h-6 bg-white rounded px-2 py-1 object-contain" />
                <img src="/mastercard.png" alt="Mastercard" className="h-6 bg-white rounded px-2 py-1 object-contain" />
                <img src="/american express.png" alt="Amex" className="h-6 bg-white rounded px-2 py-1 object-contain" />
                <img src="/visa.png" alt="visa" className="h-6 bg-white rounded px-2 py-1 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-xs text-gray-400">
          <p>© 2024 Hottubsuperstore.com. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
