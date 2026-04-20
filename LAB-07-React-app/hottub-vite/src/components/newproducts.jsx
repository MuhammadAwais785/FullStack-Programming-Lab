import React from "react";
import { Link } from "react-router-dom";

const products = [
	{
		id: 1,
		title: "XS SCYBAX SERIES 110",
		price: "$500.00",
		image: "https://images.unsplash.com/photo-1621674200458-2e6f2fa14a3a?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 2,
		title: "XS SCYBAX SERIES 111",
		price: "$500.00",
		image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 3,
		title: "XS SCYBAX SERIES 112",
		price: "$500.00",
		image: "https://images.unsplash.com/photo-1545022388-31ac2f1ccd84?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 4,
		title: "XS SCYBAX SERIES 113",
		price: "$500.00",
		image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 5,
		title: "XS SCYBAX SERIES 114",
		price: "$500.00",
		image: "https://images.unsplash.com/photo-1621674200458-2e6f2fa14a3a?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 6,
		title: "XS SCYBAX SERIES 115",
		price: "$500.00",
		image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 7,
		title: "XS SCYBAX SERIES 116",
		price: "$500.00",
		image: "https://images.unsplash.com/photo-1545022388-31ac2f1ccd84?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 8,
		title: "XS SCYBAX SERIES 117",
		price: "$500.00",
		image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=800&q=80",
	},
];

function NewProducts({
	searchQuery = "",
	onAddToCart,
	showTitle = true,
	showProducts = true,
	showBrands = true,
	wrapperClassName = "mx-4 mt-2 border border-[#d4d4d4] bg-[#f3f3f3] p-4 sm:mx-6 lg:mx-8",
}) {
	const normalizedQuery = searchQuery.trim().toLowerCase();
	const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(normalizedQuery));

	const handleAddToCart = (productTitle) => {
		onAddToCart?.(productTitle);
	};

	return (
		<section id="new-products" className={wrapperClassName}>
			{showTitle ? <h3 className="m-0 text-[30px] font-semibold uppercase leading-none text-[#283646] md:text-[38px]">New Products</h3> : null}

			{showProducts ? <div className={`${showTitle ? "mt-4" : "mt-0"} grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
				{filteredProducts.map((product) => (
					<article key={product.id} className="border border-[#d7d7d7] bg-white p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
						<div className="flex h-[130px] items-center justify-center border border-[#dfdfdf] bg-[#f9f9f9]">
							<img src={product.image} alt={product.title} className="h-[88px] w-[88px] object-cover" />
						</div>

						<h4 className="mt-3 text-[10px] font-semibold uppercase leading-tight text-[#5b5b5b]">{product.title}</h4>
						<p className="mt-1 text-[9px] leading-tight text-[#8a8a8a]">
							The good of our stores are very reliable and our service should be customer
						</p>

						<div className="mt-2 border-t border-[#efefef] pt-2">
							<p className="m-0 text-[10px] text-[#8d8d8d] line-through">$1000.00</p>
							<p className="m-0 text-[28px] font-bold leading-none text-[#133557]">{product.price}</p>
						</div>

						<button
							type="button"
							onClick={() => handleAddToCart(product.title)}
							className="mt-2 h-[24px] cursor-pointer border border-[#c9111a] bg-[#ef1b24] px-3 text-[10px] font-semibold uppercase text-white transition hover:bg-[#d90f18] active:scale-[0.98]"
						>
							Add to Cart
						</button>

						<div className="mt-2 flex items-center gap-3 border-t border-[#efefef] pt-2">
							<a href="#" className="text-[9px] uppercase text-[#d46a71] no-underline">
								Add to Wishlist
							</a>
							<Link to="/product-des" className="text-[9px] uppercase text-[#d46a71] no-underline">
								View Details
							</Link>
						</div>
					</article>
				))}
			</div> : null}

			{showProducts && filteredProducts.length === 0 ? (
				<p className="mt-4 border border-[#d7d7d7] bg-white px-4 py-3 text-[12px] text-[#4c4c4c]">
					No products found for "{searchQuery}".
				</p>
			) : null}

			{showBrands ? <div className="mt-4 grid grid-cols-1 border border-[#e8e8e8] sm:grid-cols-4">
				<div className="flex h-[72px] items-center justify-center border-b border-[#e8e8e8] bg-[#f7f7f7] p-2 sm:border-b-0 sm:border-r">
					<p className="text-center text-[28px] font-bold uppercase leading-[0.9] text-[#2e96cb]">
						Save
						<span className="text-[#f2be29]"> $1,000's</span>
					</p>
				</div>
				<div className="flex h-[72px] items-center justify-center border-b border-[#e8e8e8] p-2 sm:border-b-0 sm:border-r">
					<p className="text-[30px] font-semibold italic text-[#1a79b9]">OceanicSpa</p>
				</div>
				<div className="flex h-[72px] items-center justify-center border-b border-[#e8e8e8] p-2 sm:border-b-0 sm:border-r">
					<p className="text-[30px] font-medium text-[#b68062]">CalderaSpas</p>
				</div>
				<div className="flex h-[72px] items-center justify-center p-2">
					<p className="text-[28px] font-semibold text-[#4d8f3a]">IslandSpas</p>
				</div>
			</div> : null}
		</section>
	);
}

export default NewProducts;
