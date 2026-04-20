import React from "react";
import { NavLink } from "react-router-dom";
import NewProducts from "./newproducts";

const sidebarGroups = [
	{
		title: "Seating Capacity",
		items: ["2 - 4 People", "5 - 7 People", "8 People and More"],
	},
	{
		title: "Choose Sizes",
		items: ["5 - 6 Feet Long", "6 - 7 Feet Long", "7 - 8 Feet Long", "8 Feet to Large Size"],
	},
	{
		title: "Spas by Style",
		items: ["Plug and Play Tri Volt", "TV - Stereo Spas", "Corner Spas", "Portable Spas", "Deeper Spas"],
	},
	{
		title: "Price Ranges From",
		items: ["Under $3,000", "$3,000 to 4,000", "$4,000 to 5,000", "$5,000 to 6,000", "$6,000+"],
	},
];

function CategoryContent({ searchQuery = "", onAddToCart }) {
	return (
		<section className="mx-4 mt-4 border border-[#d8d8d8] bg-[#f6f6f6] p-3 sm:mx-6 lg:mx-8">
			<div className="mb-4 text-[11px] text-[#6b7d89]">
				<NavLink to="/hottub-main" className="text-[#3f90c8] no-underline">
					Home
				</NavLink>
				<span className="mx-1">&gt;</span>
				<span>Category</span>
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
				<aside className="lg:col-span-3">
					<h2 className="border-b border-[#d2d2d2] pb-2 text-[26px] font-semibold text-[#273745]">Shopping Options</h2>

					{sidebarGroups.map((group) => (
						<div key={group.title} className="mt-4 border-b border-[#e2e2e2] pb-3">
							<h3 className="text-[11px] uppercase tracking-wide text-[#7a7a7a]">{group.title}</h3>
							<ul className="mt-2 space-y-2 p-0">
								{group.items.map((item) => (
									<li key={item} className="list-none text-[11px] uppercase text-[#8b8b8b]">
										<span className="mr-2 text-[#b5b5b5]">&gt;</span>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</aside>

				<div className="lg:col-span-9">
					<div className="flex items-center justify-between border-b border-[#d2d2d2] pb-2">
						<h2 className="text-[26px] font-semibold text-[#273745]">Top Product Listing</h2>
						<label className="text-[11px] text-[#7e7e7e]">
							Show
							<select className="ml-2 border border-[#d2d2d2] bg-white px-1 py-0.5 text-[11px] text-[#646464]">
								<option>9</option>
								<option>12</option>
								<option>24</option>
							</select>
						</label>
					</div>

					<NewProducts
						searchQuery={searchQuery}
						onAddToCart={onAddToCart}
						showTitle={false}
						showBrands={true}
						wrapperClassName="mx-0 mt-4 border border-[#e0e0e0] bg-transparent p-0"
					/>
				</div>
			</div>
		</section>
	);
}

export default CategoryContent;
