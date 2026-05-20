'use client';

export default function Header() {
  return (
    <div className="w-full bg-[#f8f8f8] border-b border-gray-200">
      <div className="max-w-[1000px] mx-auto px-4 flex justify-between items-center py-2 text-[11px]">
        <div className="text-gray-500">
          Call for Customer support: <span className="text-[#eb1b23] font-semibold">020 38080565</span>
        </div>
        <div className="flex gap-6 text-gray-500">
          <a href="/my-account" className="hover:text-[#eb1b23]">My Account</a>
          <a href="/wishlist" className="hover:text-[#eb1b23]">Wishlist</a>
          <a href="/checkout" className="hover:text-[#eb1b23]">To Checkout</a>
        </div>
      </div>
    </div>
  );
}
