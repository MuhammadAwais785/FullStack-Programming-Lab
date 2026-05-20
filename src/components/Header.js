"use client";

import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import CategoriesBar from './CategoriesBar';

const Header = () => {
  return (
    <header className="w-full flex flex-col">
      <Topbar />
      <Navbar />
      <CategoriesBar />
    </header>
  );
};

export default Header;