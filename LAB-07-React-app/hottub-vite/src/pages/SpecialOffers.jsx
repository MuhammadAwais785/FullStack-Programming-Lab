import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const offers = [
	{
		tag: "Limited",
		title: "Winter Heat Bundle",
		desc: "Free thermal cover, steps, and starter chemical kit with any spa over $1999.",
		price: "Save $450",
		accent: "from-[#ffe7b5] to-[#ffc164]",
	},
	{
		tag: "Weekend",
		title: "Signature Jets Upgrade",
		desc: "Upgrade to 40-jet package and premium lighting at no extra cost.",
		price: "Save $299",
		accent: "from-[#d7f4ff] to-[#7fd2ff]",
	},
	{
		tag: "New",
		title: "Family Size Savings",
		desc: "Buy 6-person spa, get 12-month service visit and free delivery.",
		price: "Save $650",
		accent: "from-[#e6ffe0] to-[#8fe28b]",
	},
];

const quickPicks = [
	"Free curbside delivery",
	"0% financing for 12 months",
	"Bundle accessories included",
	"Extended warranty upgrade",
];

function SpecialOffersPage() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className="min-h-screen bg-[#e6edf2]">
			<style>{`\n@keyframes floaty {\n  0% { transform: translateY(0px); }\n  50% { transform: translateY(-8px); }\n  100% { transform: translateY(0px); }\n}\n@keyframes fadeSlide {\n  0% { opacity: 0; transform: translateY(10px); }\n  100% { opacity: 1; transform: translateY(0); }\n}\n`}</style>
			<Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} onSearchSubmit={() => {}} cartCount={2} />

			<main className="mx-4 mt-4 border border-[#d7d7d7] bg-white p-4 sm:mx-6 lg:mx-8">
				<div className="mb-4 text-[11px] text-[#6b7d89]">
					<NavLink to="/hottub-main" className="text-[#3f90c8] no-underline">
						Home
					</NavLink>
					<span className="mx-1">&gt;</span>
					<span>Special Offers</span>
				</div>

				<section
					className="relative overflow-hidden rounded border border-[#d9d9d9] bg-gradient-to-r from-[#0c2d44] via-[#103a55] to-[#173f5c] p-6 text-white"
					style={{ backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)" }}
				>
					<div className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-[#ef101f]/20" style={{ animation: "floaty 6s ease-in-out infinite" }} />
					<div className="absolute -left-12 bottom-6 h-48 w-48 rounded-full bg-[#5dd1ff]/20" style={{ animation: "floaty 7s ease-in-out infinite" }} />
					<p className="text-[12px] uppercase tracking-[3px] text-[#ffccd1]">Seasonal Deals</p>
					<h1 className="mt-2 text-[36px] font-semibold leading-tight">Special Offers & Hot Deals</h1>
					<p className="mt-2 max-w-[520px] text-[12px] text-[#d5e4ef]">
						Catch limited bundles, extended warranties, and accessory upgrades. Pick your spa and lock the savings today.
					</p>
					<div className="mt-4 flex flex-wrap items-center gap-3">
						<Link to="/product-des" className="bg-[#ef101f] px-4 py-2 text-[11px] font-semibold uppercase text-white no-underline">
							Explore Spas
						</Link>
						<Link to="/shopping-cart" className="border border-white/50 px-4 py-2 text-[11px] font-semibold uppercase text-white no-underline">
							View Cart
						</Link>
					</div>
				</section>

				<section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						{offers.map((offer, index) => (
							<article
								key={offer.title}
								className="rounded border border-[#e0e0e0] bg-[#f7f7f7] p-4"
								style={{ animation: `fadeSlide 0.6s ease ${(index + 1) * 0.1}s both` }}
							>
								<div className={`inline-flex items-center rounded-full bg-gradient-to-r ${offer.accent} px-3 py-1 text-[10px] font-semibold uppercase text-[#1d1d1d]`}>
									{offer.tag}
								</div>
								<h3 className="mt-3 text-[18px] font-semibold text-[#2d4151]">{offer.title}</h3>
								<p className="mt-2 text-[11px] text-[#606060]">{offer.desc}</p>
								<p className="mt-3 text-[14px] font-semibold text-[#ef101f]">{offer.price}</p>
								<button type="button" className="mt-3 h-8 bg-[#0d3b57] px-3 text-[10px] font-semibold uppercase text-white">
									Claim Offer
								</button>
							</article>
						))}
					</div>

					<aside className="rounded border border-[#d9d9d9] bg-[#f0f4f7] p-4">
						<h3 className="text-[16px] font-semibold text-[#2d4151]">Offer Highlights</h3>
						<ul className="mt-3 space-y-2 text-[11px] text-[#4f4f4f]">
							{quickPicks.map((item) => (
								<li key={item} className="flex items-start gap-2">
									<span className="mt-1 h-2 w-2 rounded-full bg-[#ef101f]" />
									<span>{item}</span>
								</li>
							))}
						</ul>
						<div className="mt-4 rounded border border-[#d0dfe9] bg-white p-3 text-[11px] text-[#4f4f4f]">
							<p className="font-semibold text-[#2d4151]">Bundle Tip</p>
							<p className="mt-1">Combine spa + cover + steps to unlock our biggest install savings.</p>
						</div>
					</aside>
				</section>

				<section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
					<div className="rounded border border-[#e0e0e0] bg-[#fff7f2] p-4">
						<h3 className="text-[18px] font-semibold text-[#2d4151]">Price Match Promise</h3>
						<p className="mt-2 text-[11px] text-[#5f5f5f]">
							If you find a lower price on a comparable spa, we will match it with our price guarantee and add an accessory bonus.
						</p>
						<Link to="/contact-us" className="mt-3 inline-block text-[11px] font-semibold text-[#3f90c8] no-underline">
							Talk to a specialist
						</Link>
					</div>
					<div className="rounded border border-[#e0e0e0] bg-[#f5f8ff] p-4">
						<h3 className="text-[18px] font-semibold text-[#2d4151]">Last Chance Deals</h3>
						<p className="mt-2 text-[11px] text-[#5f5f5f]">End-of-line stock with delivery included. Limited quantities.</p>
						<div className="mt-3 flex items-center gap-2 text-[11px] text-[#4f4f4f]">
							<span className="h-2 w-2 rounded-full bg-[#5cb85c]" />
							3 spas remaining
						</div>
						<div className="mt-3 text-[11px] text-[#4f4f4f]">
							Expires in <span className="font-semibold text-[#ef101f]">48 hours</span>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default SpecialOffersPage;
