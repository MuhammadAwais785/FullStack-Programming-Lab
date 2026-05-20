'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <div className="w-full bg-[#eb1b23]">
      <div className="max-w-[1000px] mx-auto px-4 h-9 flex justify-between items-center">
        {/* Navigation Links */}
        <nav className="flex h-full items-center">
          <Link href="/category"
            className="text-white text-[11px] font-semibold tracking-wider px-4 flex items-center h-full hover:bg-red-700">
            CATEGORY
          </Link>
          <span className="text-white text-[10px] opacity-[0.35]">|</span>
          <Link href="/brand"
            className="text-white text-[11px] font-semibold tracking-wider px-4 flex items-center h-full hover:bg-red-700">
            BRAND
          </Link>
          <span className="text-white text-[10px] opacity-[0.35]">|</span>
          <Link href="/info"
            className="text-white text-[11px] font-semibold tracking-wider px-4 flex items-center h-full hover:bg-red-700">
            INFO
          </Link>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center h-[26px]">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-full px-[10px] w-[250px] text-[11px] text-gray-500 border-none outline-none"
          />
          <button type="submit" className="bg-[#383838] hover:bg-black text-white px-5 h-full text-[11px] font-bold">
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
}
