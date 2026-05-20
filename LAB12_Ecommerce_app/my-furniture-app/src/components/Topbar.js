"use client";
import React from 'react';

const Topbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 text-gray-800 text-xs py-2 px-4 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex justify-end items-center space-x-8">
        
          {/* Social Media Icons Container */}
          <div className="flex items-center gap-4 text-gray-800">
          {/* YouTube */}
            <a href="#" className="inline-flex items-center p-1 hover:text-red-600 transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* Google Plus */}
            <a href="#" className="inline-flex items-center p-1 hover:text-red-500 transition-colors" aria-label="Google Plus">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M7.56 10.14v2.82h4.31c-.19 1.15-1.31 3.39-4.31 3.39-2.6 0-4.72-2.15-4.72-4.8s2.12-4.8 4.72-4.8c1.48 0 2.47.61 3.04 1.16l2.23-2.15C11.42 4.45 9.63 3.5 7.56 3.5 3.38 3.5 0 6.88 0 11s3.38 7.5 7.56 7.5c4.36 0 7.26-3.07 7.26-7.39 0-.5-.05-.88-.12-1.26H7.56zm16.44.86h-2.18V8.82h-2.18V11h-2.18v2.18h2.18v2.18h2.18v-2.18H24z"/>
            </svg>
          </a>

          {/* Twitter / X */}
            <a href="#" className="inline-flex items-center p-1 hover:text-black transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* Facebook */}
            <a href="#" className="inline-flex items-center p-1 hover:text-blue-600 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
        </div>

        {/* Vertical Divider */}
          <span className="text-gray-400"> | </span>

        {/* Phone Number */}
          <div className="font-medium  tracking-wide text-gray-700 pl-2">
            07584 031409
          </div>

      </div>
    </div>
  );
};

export default Topbar;