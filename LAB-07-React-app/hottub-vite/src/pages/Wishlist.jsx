import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

const wishlistItems = [
	{
		id: 1,
		title: "XS SCYBAX SERIES 110",
		price: "$500.00",
		detail: "Premium jets + thermal cover bundle",
	},
	{
		id: 2,
		title: "XS SCYBAX SERIES 114",
		price: "$500.00",
		detail: "Energy efficient heater upgrade",
	},
];

function WishlistPage() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div>
			<Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} onSearchSubmit={() => {}} cartCount={1} />

			<main className="mx-4 mt-4 border border-[#d7d7d7] bg-[#f3f3f3] p-4 sm:mx-6 lg:mx-8">
				<div className="mb-4 text-[11px] text-[#6b7d89]">
					<NavLink to="/hottub-main" className="text-[#3f90c8] no-underline">
						Home
					</NavLink>
					<span className="mx-1">&gt;</span>
					<span>Wishlist</span>
				</div>

				<h1 className="text-[28px] font-semibold text-[#2d4151]">My Wishlist</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<h2 className="text-[16px] font-semibold text-[#2d4151]">Saved Items</h2>
					<div className="mt-3 border border-[#dcdcdc] bg-white">
						<div className="grid grid-cols-[1.4fr_90px_120px] border-b border-[#e2e2e2] bg-[#f8f8f8] px-3 py-2 text-[10px] text-[#6c6c6c]">
							<div>Product</div>
							<div className="text-center">Price</div>
							<div className="text-right">Actions</div>
						</div>
						{wishlistItems.map((item) => (
							<div key={item.id} className="grid grid-cols-[1.4fr_90px_120px] border-b border-[#eeeeee] px-3 py-3 text-[11px] text-[#4f4f4f]">
								<div>
									<p className="text-[11px] font-semibold text-[#2f6fb0]">{item.title}</p>
									<p className="mt-1 text-[10px] text-[#7a7a7a]">{item.detail}</p>
								</div>
								<div className="text-center font-semibold text-[#2d2d2d]">{item.price}</div>
								<div className="flex items-center justify-end gap-2">
									<button type="button" className="h-7 bg-[#ef101f] px-2 text-[10px] font-semibold uppercase text-white">
										Add to Cart
									</button>
									<Link to="/product-des" className="text-[10px] uppercase text-[#3f90c8] no-underline">
										View
									</Link>
								</div>
							</div>
						))}
					</div>
				</section>

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

export default WishlistPage;
