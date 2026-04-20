import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

const cartItems = [
	{
		id: 1,
		title: "The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version",
		details: "220v 50 AMP - 4.5 KW Heater 110 V/15 AMP - 1.5 KW Heater",
		price: "$9.00",
	},
	{
		id: 2,
		title: "The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version",
		details: "220v 50 AMP - 4.5 KW Heater 110 V/15 AMP - 1.5 KW Heater",
		price: "$9.00",
	},
];

const relatedItems = [
	{ id: 1, price: "$2,549.15", title: "Bosch 22 Cu. Ft Stainless Refrigerator", sku: "820225GGSN16" },
	{ id: 2, price: "$2,549.15", title: "Bosch 22 Cu. Ft Stainless Refrigerator", sku: "820225GGSN16" },
	{ id: 3, price: "$2,549.15", title: "Bosch 22 Cu. Ft Stainless Refrigerator", sku: "820225GGSN16" },
	{ id: 4, price: "$2,549.15", title: "Bosch 22 Cu. Ft Stainless Refrigerator", sku: "820225GGSN16" },
];

function ShoppingCartPage() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div>
			<Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} onSearchSubmit={() => {}} cartCount={2} />

			<main className="mx-4 mt-4 border border-[#d7d7d7] bg-[#f3f3f3] p-4 sm:mx-6 lg:mx-8">
				<div className="mb-4 text-[11px] text-[#6b7d89]">
					<NavLink to="/hottub-main" className="text-[#3f90c8] no-underline">
						Home
					</NavLink>
					<span className="mx-1">&gt;</span>
					<span>Shopping Cart</span>
				</div>

				<h1 className="text-[28px] font-semibold text-[#2d4151]">Shopping Cart</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<h2 className="text-[16px] font-semibold text-[#2d4151]">Your Shopping Cart</h2>
					<div className="mt-3 border border-[#98c16d] bg-[#f5fff0] px-3 py-2 text-[11px] text-[#4a7a2e]">
						<span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[#66a63a] text-[10px] font-bold text-white">✓</span>
						The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in was just added cart.
					</div>

					<div className="mt-3 text-[10px] text-[#7a7a7a]">Items added: user_name</div>
					<div className="mt-2 border border-[#dcdcdc] bg-white">
						<div className="grid grid-cols-[1.2fr_140px_90px] border-b border-[#e2e2e2] bg-[#f8f8f8] px-3 py-2 text-[10px] text-[#6c6c6c]">
							<div>Items added</div>
							<div className="text-center">Quantity</div>
							<div className="text-right">Items total</div>
						</div>

						{cartItems.map((item) => (
							<div key={item.id} className="grid grid-cols-[1.2fr_140px_90px] border-b border-[#eeeeee] px-3 py-3 text-[11px] text-[#4f4f4f]">
								<div className="flex gap-3">
									<div className="h-[58px] w-[58px] rounded-[6px] border border-[#d8d8d8] bg-gradient-to-br from-[#dfe4ea] to-[#bfc6cf]" />
									<div>
										<p className="text-[11px] font-semibold text-[#2f6fb0]">{item.title}</p>
										<p className="mt-1 text-[10px] text-[#7a7a7a]">{item.details}</p>
										<p className="mt-2 text-[10px] text-[#8f8f8f]">Standard / 7 - 10 Business days</p>
										<div className="mt-2 flex items-center gap-3 text-[10px] text-[#3f90c8]">
											<button type="button" className="cursor-pointer">Remove</button>
											<button type="button" className="cursor-pointer">Edit Your Order</button>
										</div>
									</div>
								</div>
								<div className="flex items-start justify-center">
									<select className="h-6 w-12 border border-[#cfcfcf] text-[10px]">
										<option>1</option>
										<option>2</option>
										<option>3</option>
									</select>
								</div>
								<div className="text-right font-semibold text-[#2d2d2d]">{item.price}</div>
							</div>
						))}
					</div>

					<div className="mt-4 flex flex-wrap items-center justify-end gap-4 text-[11px] text-[#6f6f6f]">
						<p>Cart summary (2 items)</p>
						<p className="font-semibold text-[#2d2d2d]">Total: $21.00</p>
					</div>

					<div className="mt-2 flex flex-wrap items-center justify-end gap-3">
						<button type="button" className="h-8 border border-[#d2d2d2] bg-white px-3 text-[10px] uppercase text-[#6f6f6f]">
							Continue Shopping
						</button>
						<Link to="/payment-form" className="flex h-8 items-center bg-[#ef101f] px-4 text-[10px] font-semibold uppercase text-white no-underline">
							Proceed to Checkout
						</Link>
					</div>
				</section>

				<div className="mt-8">
					<h3 className="text-[16px] font-semibold text-[#2d4151]">Customers Who Viewed This Item Also</h3>
					<div className="mt-3 flex items-center gap-2">
						<button type="button" className="text-[20px] text-[#4f8ab2]">&lt;</button>
						<div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
							{relatedItems.map((item) => (
								<div key={item.id} className="flex items-center gap-2">
									<div className="h-[62px] w-[62px] rounded-[8px] border border-[#d8d8d8] bg-gradient-to-br from-[#dfe4ea] to-[#bfc6cf]" />
									<div>
										<p className="text-[11px] font-semibold text-[#ef101f]">{item.price}</p>
										<p className="text-[10px] leading-tight text-[#5b5b5b]">{item.title}</p>
										<p className="text-[9px] text-[#7f7f7f]">{item.sku}</p>
									</div>
								</div>
							))}
						</div>
						<button type="button" className="text-[20px] text-[#4f8ab2]">&gt;</button>
					</div>
				</div>

				<NewProducts
					searchQuery=""
					showTitle={false}
					showProducts={false}
					showBrands={true}
					wrapperClassName="mt-4 border border-[#e0e0e0] bg-white p-3"
				/>
			</main>

			<Footer />
		</div>
	);
}

export default ShoppingCartPage;
