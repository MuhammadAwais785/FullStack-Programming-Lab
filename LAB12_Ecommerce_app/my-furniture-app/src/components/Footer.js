'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-300 mt-20">
      {/* Partner logos section */}
      <div className="max-w-7xl mx-auto px-4 py-12 border-b-2 border-gray-400">
        <div className="flex justify-center items-center space-x-8 flex-wrap gap-6">
          <span className="text-green-600 font-bold text-2xl">f4b</span>
          <span className="text-blue-700 font-bold text-sm">Australian Government</span>
          <span className="text-red-600 font-bold">QANTAS</span>
          <span className="text-blue-600 font-bold text-sm">QATARISK</span>
          <span className="text-blue-500 font-bold">GE</span>
          <span className="text-blue-700 font-bold text-sm">Rockwell Collins</span>
          <span className="text-blue-600 font-bold text-sm">LexisNexis</span>
          <span className="text-orange-600 font-bold text-sm">ahlmedia</span>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Informations */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-500 uppercase tracking-wide">INFORMATIONS</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Best sells
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Return policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Suppliers
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-500 uppercase tracking-wide">MY ACCOUNT</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Your Account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Information
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Orders history
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Search Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Help and More */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-500 uppercase tracking-wide">HELP AND MORE</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  New products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Top offers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Manufacturers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Suppliers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Specials
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-500 uppercase tracking-wide">LINKS</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Mobile
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition">
                  Manufacturers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment methods and copyright */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-t-2 border-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Payment methods */}
          <div className="flex items-center space-x-6">
            <span className="text-xs font-semibold text-gray-700 uppercase">Payment Methods:</span>
            <span className="text-2xl">💳</span>
            <span className="text-2xl">💳</span>
            <span className="text-2xl">💳</span>
            <span className="text-2xl">💳</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-700 text-center md:text-right">
            © 2024 Rustik Plank Furniture. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
