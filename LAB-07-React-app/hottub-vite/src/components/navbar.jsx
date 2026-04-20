import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar({ searchQuery = "", onSearchChange, onSearchSubmit, cartCount = 0 }) {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		onSearchSubmit?.();
	};

	const handleCartChange = (e) => {
		const destination = e.target.value;
		if (destination === "view-cart") {
			navigate("/shopping-cart");
		}
		if (destination === "checkout") {
			navigate("/payment-form");
		}
		e.target.value = "my-cart";
	};

	return (
		<header className="w-full bg-white text-[#222222]">
			<div className="border-y border-[#e6e6e6] bg-[#efefef]">
				<div className="flex min-h-6 w-full items-center justify-between px-4 sm:px-6 lg:px-8 max-sm:flex-col max-sm:items-start max-sm:py-1.5">
					<p className="m-0 text-[12px] text-[#333333]">
						Call for Customer support: <span>020 38989565</span>
					</p>
					<nav className="mt-1 flex items-center max-sm:w-full" aria-label="Account Links">
						<NavLink
							to="/my-account"
							className="border-l border-[#d7d7d7] px-3.5 text-[12px] leading-6 text-[#525252] no-underline max-sm:px-2">
							My Account
						</NavLink>
						<NavLink
							to="/wishlist"
							className="border-l border-[#d7d7d7] px-3.5 text-[12px] leading-6 text-[#525252] no-underline max-sm:px-2">
							Wishlist
						</NavLink>
						<NavLink
							to="/payment-form"
							className="border-x border-[#d7d7d7] px-3.5 text-[12px] leading-6 text-[#525252] no-underline max-sm:px-2">
							To Checkout
						</NavLink>
					</nav>
				</div>
			</div>

			<div className="bg-white">
				<div className="flex min-h-[78px] w-full items-center justify-between gap-3.5 px-4 py-2 sm:px-6 lg:px-8 max-[980px]:flex-wrap">
					<div aria-label="HOTSPRING Portable Spas">
						<h1 className="m-0 text-[44px] leading-[0.9] tracking-[1px] text-[#0b2a46] max-sm:text-[30px]">HOTSPRING</h1>
						<p className="m-0 mt-0.5 text-[39px] leading-[0.9] text-[#df2e3f] max-sm:text-[24px]">Portable Spas</p>
					</div>

					<nav
						className="mt-[18px] flex items-center gap-[30px] max-[980px]:order-3 max-[980px]:mt-0 max-[980px]:w-full max-[980px]:justify-center"
						aria-label="Primary Navigation">
						<NavLink
							to="/hottub-main"
							className={({ isActive }) =>
								`text-[12px] uppercase no-underline ${isActive ? "text-[#e84b43]" : "text-[#444444]"}`
							}
						>
							Home
						</NavLink>
						
						<a href="/hottub-main#new-products" className="text-[12px] uppercase text-[#444444] no-underline">
							Products
						</a>
						<NavLink to="/special-offers" className="text-[12px] uppercase text-[#444444] no-underline">
							Special Offers
						</NavLink>
						<NavLink to="/contact-us" className="text-[12px] uppercase text-[#444444] no-underline">
							Customer Service
						</NavLink>
					</nav>

					<div className="-mt-3.5 flex h-[30px] min-w-[210px] items-center gap-2 border border-[#d8d8d8] bg-[#fdfdfd] px-2 max-[980px]:mt-0">
						<span
							className="inline-flex h-[22px] w-[22px] items-center justify-center bg-[#ef2029] text-[12px] font-bold text-white"
							aria-hidden="true"
						>
							C
						</span>
						<select
							aria-label="My Cart Dropdown"
							defaultValue="my-cart"
							onChange={handleCartChange}
							className="w-full cursor-pointer bg-transparent text-[12px] text-[#555555] outline-none"
						>
							<option value="my-cart">My Cart | {cartCount} Items (s)</option>
							<option value="view-cart">View Cart</option>
							<option value="checkout">Checkout</option>
						</select>
					</div>
				</div>
			</div>

			<div className="bg-[#ef101f]">
				<div className="flex min-h-10 w-full items-center justify-between gap-2.5 px-4 sm:px-6 lg:px-8 max-[980px]:flex-col max-[980px]:items-start max-[980px]:py-2">
					<nav className="flex min-w-[330px] items-center max-[980px]:min-w-0" aria-label="Category Navigation">
						<NavLink
							to="/category"
							className="pr-6 text-[18px] uppercase leading-none text-white no-underline max-sm:px-3 max-sm:text-[14px]"
						>
							Catagory
						</NavLink>
						<a
							href="#"
							className="border-r border-white/45 px-6 text-[18px] uppercase leading-none text-white no-underline max-sm:px-3 max-sm:text-[14px]"
						>
							Brand
						</a>
						<NavLink
							to="/about-us"
							className="border-r border-white/45 px-6 text-[18px] uppercase leading-none text-white no-underline max-sm:px-3 max-sm:text-[14px]">
							Info
						</NavLink>
					</nav>

					<form
						className="flex h-[30px] w-[380px] items-stretch bg-white p-[1px] max-[980px]:w-full max-[980px]:max-w-[520px]"
						onSubmit={handleSubmit}
					>
						<input
							type="text"
							placeholder="Search"
							aria-label="Search"
							value={searchQuery}
							onChange={(e) => onSearchChange?.(e.target.value)}
							className="flex-1 border border-r-0 border-[#bbbbbb] px-2.5 text-[12px] outline-none"
						/>
						<button type="submit" className="w-20 cursor-pointer bg-[#232323] text-[12px] uppercase text-white">
							Search
						</button>
					</form>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
