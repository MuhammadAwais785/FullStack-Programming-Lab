"use client";

import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 text-gray-800 py-4 px-16 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* 1. Left Side: Logo */}
        <div className="text-3xl font-semibold tracking-tight text-black flex items-center pl-6">
          <span className="text-orange-500 font-serif">R</span>
          <span className="font-serif -ml-0.5">ustik Plank</span>
        </div>

        {/* 2. Center: Navigation Links */}
        <div className="flex items-center space-x-12 font-serif italic text-sm text-gray-700">
          <a href="#" className="hover:text-orange-500 transition-colors px-6 py-1">Home</a>
          <a href="#" className="hover:text-orange-500 transition-colors px-6 py-1">Blog</a>
          <a href="#" className="hover:text-orange-500 transition-colors px-6 py-1">About Us</a>
          <a href="#" className="hover:text-orange-500 transition-colors px-6 py-1">Contact Us</a>
        </div>

        {/* 3. Right Side: My Account & Cart */}
        <div className="flex items-center space-x-6 text-xs text-gray-700">
          {/* My Account */}
          <a href="#" className="font-serif italic hover:text-orange-500 transition-colors">
            My Account (login?Register)
          </a>

          {/* Cart Section */}
          <div className="flex items-center space-x-2 border-l border-gray-400 pl-4 cursor-pointer group">
            {/* Orange Cart SVG Icon */}
            <svg 
              className="w-5 h-5 text-orange-500 fill-current group-hover:scale-105 transition-transform" 
              viewBox="0 0 24 24"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            {/* Item Count */}
            <span className="font-serif italic text-gray-800 font-medium">
              0 Item
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;