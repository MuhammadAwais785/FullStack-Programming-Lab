'use client';

import Link from 'next/link';
import CartDropdown from './CartDropdown';

export default function Logo() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1000px] mx-auto px-4 flex justify-between items-center py-[18px]">
        {/* Logo */}
        <div className="leading-none pt-1">
          <Link href="/" className="text-[28px] font-bold m-0 p-0 flex items-start tracking-tighter no-underline hover:opacity-80 transition-opacity">
            <span className="text-[#d81a21]">HOTSPRING</span>
            <sup className="text-[10px] mt-[6px] ml-[2px] text-gray-700">®</sup>
          </Link>
          <span className="text-[12px] font-bold text-[#d81a21] mt-1 inline-block">Portable Spas</span>
        </div>

        {/* Cart Dropdown */}
        <CartDropdown />
      </div>
    </div>
  );
}
