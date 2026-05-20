'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems] = useState(0);

  return (
    <div className="flex items-stretch border border-gray-200 rounded-[2px] overflow-hidden bg-white hover:bg-gray-50 cursor-pointer shadow-sm h-[32px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-3 w-full bg-white hover:bg-gray-50"
      >
        <div className="bg-[#d81a21] px-2 flex items-center justify-center h-[32px]">
          <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <span className="text-[11px] text-gray-600 font-semibold tracking-tight">My Cart: {cartItems} items(s)</span>
        <svg className="w-2.5 h-2.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg z-10">
          <div className="p-4 text-center text-gray-600 text-sm">
            Your cart is empty
          </div>
        </div>
      )}
    </div>
  );
}
