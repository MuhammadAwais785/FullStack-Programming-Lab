import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const gallery = [
	{ id: "g1", label: "Front View", tint: "from-[#d7d7d7] to-[#b9bcc1]" },
	{ id: "g2", label: "Top View", tint: "from-[#cfd7df] to-[#9fb2c5]" },
	{ id: "g3", label: "Water Mode", tint: "from-[#cae8f8] to-[#7ebddf]" },
	{ id: "g4", label: "Blue Finish", tint: "from-[#dbe8f2] to-[#8aacc9]" },
];

const calculatorFields = [
	"Interior Color",
	"Outside Shell Color",
	"Circulation Pump",
	"Polar Foam",
	"Cover / Steps",
	"Extra Filter Sets",
	"Deluxe Cover Lifter",
	"Salt Water Sanitation System",
	"TV/DVD/Entertainment",
	"Backyard Delivery",
	"Jets",
	"Perimeter Lighting",
	"Premium Popup Speakers",
	"Waterfall",
	"Spa Surround",
];

const relatedItems = [
	{ id: 1, price: "$2,549.15", title: "Bosch 22 Cu. Ft Stainless Refrigerator", sku: "820225GGSN16" },
	{ id: 2, price: "$2,549.15", title: "Bosch 22 Cu. Ft Stainless Refrigerator", sku: "820225GGSN16" },
	{ id: 3, price: "$2,549.15", title: "Bosch 22 Cu. Ft Stainless Refrigerator", sku: "820225GGSN16" },
	{ id: 4, price: "$2,549.15", title: "Bosch 22 Cu. Ft Stainless Refrigerator", sku: "820225GGSN16" },
];

function ProductDesPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedImage, setSelectedImage] = useState(gallery[0].id);
	const [cartCount, setCartCount] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [addToCartMessage, setAddToCartMessage] = useState("");

	const activeThumb = gallery.find((item) => item.id === selectedImage) ?? gallery[0];

	const handleAddToCart = (itemsToAdd = 1) => {
		const safeItems = Number.isFinite(itemsToAdd) && itemsToAdd > 0 ? Math.floor(itemsToAdd) : 1;
		setCartCount((prev) => prev + safeItems);
		setAddToCartMessage(`${safeItems} item${safeItems > 1 ? "s" : ""} added to cart.`);
	};

	return (
		<div className="min-h-screen bg-[#dce4e8]">
			<Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} onSearchSubmit={() => {}} cartCount={cartCount} />

			<main className="mx-auto w-full max-w-[1060px] px-4 py-6">
				<section className="border border-[#d9d9d9] bg-white p-4 md:p-6">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_250px]">
						<div>
							<h1 className="text-[38px] font-semibold leading-tight text-[#2b3f52] md:text-[40px]">
								Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets
							</h1>
							<p className="mt-1 text-[11px] text-[#7b7b7b]">Atk Model 822CS300NS | UPC Code: 82526686729</p>

							<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[360px_minmax(0,1fr)]">
								<div>
									<div className="flex h-[340px] items-center justify-center border border-[#d5d5d5] bg-[#fafafa] p-4">
										<div className={`h-[280px] w-[280px] rounded-[28px] bg-gradient-to-br ${activeThumb.tint} p-6 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.75)]`}>
											<div className="grid h-full grid-cols-3 gap-3 rounded-[18px] border border-[#9ca3af]/70 p-4">
												{Array.from({ length: 9 }).map((_, index) => (
													<div key={`jet-${index}`} className="rounded-full border border-[#7f8fa1] bg-[#e9ecef] shadow-[inset_0_0_0_2px_rgba(170,178,188,0.5)]" />
												))}
											</div>
										</div>
									</div>

									<p className="mt-3 text-center text-[10px] text-[#8a8a8a]">Roll over image to zoom in</p>

									<div className="mt-2 flex items-center justify-center gap-2">
										{gallery.map((thumb) => (
											<button
												key={thumb.id}
												type="button"
												onClick={() => setSelectedImage(thumb.id)}
												className={`h-[42px] w-[52px] border p-1 ${selectedImage === thumb.id ? "border-[#3f90c8]" : "border-[#dddddd]"}`}
											>
												<div className={`h-full w-full rounded-[2px] bg-gradient-to-br ${thumb.tint}`} />
											</button>
										))}
									</div>

									<button type="button" className="mx-auto mt-3 block text-[11px] font-semibold text-[#3f90c8]">
										+ Larger View
									</button>
								</div>

								<div>
									<div className="flex items-center gap-2 text-[11px]">
										<span className="text-[#f39c12]">★★★★</span>
										<span className="text-[#c8c8c8]">★</span>
										<span className="rounded bg-[#ededed] px-1 text-[10px] font-semibold text-[#4f4f4f]">4.2</span>
										<a href="#" className="text-[#3f90c8] no-underline">
											(14 reviews)
										</a>
									</div>

									<p className="mt-2 text-[11px] text-[#7c7c7c]">Retail Price: $2399.00</p>
									<p className="text-[11px] font-semibold text-[#e71825]">Sale price</p>
									<p className="text-[44px] font-bold leading-none text-[#e71825]">$1979.00</p>
									<a href="#" className="mt-1 inline-block text-[11px] text-[#3f90c8] no-underline">
										Low Price Guarantee
									</a>

									<div className="mt-4 space-y-2 text-[11px] leading-[1.3] text-[#4f4f4f]">
										<p>
											<span className="font-semibold text-[#2f2f2f]">Size/Seating Capacity</span>
											<br />
											77", 77", 32" / 6 Persons
										</p>
										<p>
											<span className="font-semibold text-[#2f2f2f]">Seating Design</span>
											<br />
											Bucket, Lounge, Chair, Bench
										</p>
										<p>
											<span className="font-semibold text-[#2f2f2f]">Water Capacity / Dry Weight</span>
											<br />
											385 Gallons / 575 lbs.
										</p>
										<p>
											<span className="font-semibold text-[#2f2f2f]">Number of Pumps</span>
											<br />
											2 x 5HP
										</p>
										<p>
											<span className="font-semibold text-[#2f2f2f]">Electrical</span>
											<br />
											5.5 KW Heavy Heater, 220V, 50 amp eTL Certificate
										</p>
									</div>

									<p className="mt-4 text-[11px] font-semibold text-[#2f2f2f]">In stock <a href="#" className="text-[#3f90c8] font-normal no-underline">availability</a></p>

									<button
										type="button"
										onClick={() => handleAddToCart(1)}
										className="mt-3 h-8 cursor-pointer bg-[#ef101f] px-4 text-[11px] font-semibold uppercase text-white"
									>
										Add To Cart
									</button>
									{addToCartMessage ? <p className="mt-2 text-[11px] text-[#2c7a44]">{addToCartMessage}</p> : null}
								</div>
							</div>

							<div className="mt-8">
								<div className="flex flex-wrap border-b border-[#dddddd]">
									<div className="-mb-px border border-[#dddddd] border-b-white bg-white px-5 py-2 text-[11px] font-semibold text-[#353535]">Details</div>
									<div className="px-5 py-2 text-[11px] font-semibold text-[#5f7d94]">Quick Specs</div>
									<div className="px-5 py-2 text-[11px] font-semibold text-[#5f7d94]">Accessories</div>
									<div className="px-5 py-2 text-[11px] font-semibold text-[#5f7d94]">Reviews</div>
									<div className="px-5 py-2 text-[11px] font-semibold text-[#5f7d94]">Q &amp; A</div>
								</div>
								<div className="border border-[#dddddd] border-t-0 bg-white p-4 text-[11px] leading-relaxed text-[#505050] md:p-5">
									<p className="font-semibold">Product Details</p>
									<p>Energy Star Rated : No</p>
									<h3 className="mt-2 text-[31px] font-semibold leading-tight text-[#304555] md:text-[34px]">Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h3>
									<p className="mt-2">The HotTub 822CS300NS</p>
									<p className="mt-3 text-justify">
										This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
										sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
										Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
										tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
									</p>
									<p className="mt-3 text-justify">
										Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in
										erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
										imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit
										mauris egestas quam, ut aliquam massa nisl quis neque.
									</p>
									<p className="mt-3 text-justify">
										Suspendisse in orci enim. This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit
										auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec
										sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
									</p>
								</div>
							</div>
						</div>

						<aside className="space-y-4">
							<div className="border border-[#d8d8d8] bg-[#f9f9f9] p-3">
								<h3 className="text-[31px] font-semibold text-[#2e4253]">Price Calculator</h3>
								<div className="mt-3 space-y-2">
									{calculatorFields.map((label) => (
										<div key={label}>
											<label className="mb-1 block text-[10px] text-[#666666]">{label}:</label>
											<select className="h-[22px] w-full border border-[#cecece] bg-white px-1 text-[10px] text-[#4d4d4d] outline-none">
												<option>...</option>
											</select>
										</div>
									))}

									<div>
										<label className="mb-1 block text-[10px] text-[#666666]">Quantity:</label>
										<input
											type="number"
											min="1"
											value={quantity}
											onChange={(e) => setQuantity(Number(e.target.value) || 1)}
											className="h-[22px] w-[62px] border border-[#cecece] px-1 text-[10px] text-[#4d4d4d] outline-none"
										/>
									</div>

									<div className="mt-3 border border-[#dddddd] bg-white px-2 py-1 text-right text-[11px] text-[#555555]">
										Total Price: <span className="font-bold text-[#ef101f]">$650.00</span>
									</div>

									<button
										type="button"
										onClick={() => handleAddToCart(quantity)}
										className="mt-2 h-8 w-full cursor-pointer bg-[#ef101f] text-[11px] font-semibold uppercase text-white"
									>
										Add To Cart
									</button>
									{addToCartMessage ? <p className="mt-2 text-[11px] text-[#2c7a44]">{addToCartMessage}</p> : null}
								</div>
							</div>

							<div className="border border-[#d8d8d8] bg-[#f9f9f9] p-3">
								<h3 className="text-[28px] font-semibold text-[#2e4253]">Download Resources</h3>
								<ul className="mt-3 space-y-2 text-[11px] text-[#5f7d94]">
									<li>
										<a href="#" className="no-underline">Full Line Brochure</a>
									</li>
									<li>
										<a href="#" className="no-underline">Owner&apos;s Manual</a>
									</li>
									<li>
										<a href="#" className="no-underline">Specification Sheet</a>
									</li>
								</ul>
								<div className="mt-4 border-t border-[#e2e2e2] pt-3 text-[11px] font-semibold text-[#d1333a]">PDF Reader</div>
							</div>
						</aside>
					</div>

					<div className="mt-8 border-y border-[#e2e2e2] py-5">
						<h3 className="text-[30px] font-semibold text-[#2e4253]">Customers Who Viewed This Item Also</h3>
						<div className="mt-4 flex items-center gap-2">
							<button type="button" className="text-[24px] text-[#4f8ab2]">&lt;</button>
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
							<button type="button" className="text-[24px] text-[#4f8ab2]">&gt;</button>
						</div>
					</div>

					<div className="mt-5 grid grid-cols-2 gap-2 border border-[#dfdfdf] bg-white p-3 sm:grid-cols-4">
						<div className="flex h-[54px] items-center justify-center bg-[#eaf6ff] text-[18px] font-bold text-[#2f88c7]">SAVE $1,000&apos;S</div>
						<div className="flex h-[54px] items-center justify-center bg-[#f7fbff] text-[18px] font-semibold text-[#4f80c8]">OceanicSpa</div>
						<div className="flex h-[54px] items-center justify-center bg-[#fff8f8] text-[18px] font-semibold text-[#eb6f55]">CalderaSpas</div>
						<div className="flex h-[54px] items-center justify-center bg-[#f8fff7] text-[18px] font-semibold text-[#4d9c42]">IslandSpas</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default ProductDesPage;
