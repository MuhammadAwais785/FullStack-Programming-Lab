"use client";

import React, { useState } from 'react';

const CategoriesBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 text-gray-700 py-3 px-6 shadow-sm border-t border-gray-300/50">
      <div className="max-w-7xl mx-auto flex justify-end items-center space-x-8">
        
        {/* Product Categories Links */}
        <div className="flex items-center space-x-8 text-[13px] font-medium tracking-wider text-gray-600">
          <a href="#" className="hover:text-orange-500 transition-colors">BEDS</a>
          <a href="#" className="hover:text-orange-500 transition-colors">CABINETS</a>
          <a href="#" className="hover:text-orange-500 transition-colors">BOOKCASES</a>
          <a href="#" className="hover:text-orange-500 transition-colors">BOXES</a>
          <a href="#" className="hover:text-orange-500 transition-colors">CHAIRS</a>
          <a href="#" className="hover:text-orange-500 transition-colors">TABLES</a>
        </div>

        {/* Search Input Field */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white border border-gray-300 text-gray-800 text-xs px-3 py-1.5 pr-8 w-48 focus:outline-none focus:border-orange-500 font-serif italic transition-colors"
          />
          {/* Search SVG Icon inside input */}
          <span className="absolute right-2.5 text-gray-500 cursor-pointer hover:text-orange-500 transition-colors">
            <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </div>

      </div>
    </div>
  );
};

export default CategoriesBar;