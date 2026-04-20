import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	const socialLinks = [
		{ label: "Twitter", short: "t", href: "https://twitter.com", bg: "#2eb5ef" },
		{ label: "Facebook", short: "f", href: "https://facebook.com", bg: "#305d9a" },
		{ label: "LinkedIn", short: "in", href: "https://linkedin.com", bg: "#256a9a" },
		{ label: "Google", short: "g+", href: "https://google.com", bg: "#dd4b39" },
		{ label: "YouTube", short: "yt", href: "https://youtube.com", bg: "#cd201f" },
		{ label: "Pinterest", short: "p", href: "https://pinterest.com", bg: "#cb2027" },
	];

	const infoLinks = [
		{ label: "About Us", to: "/about-us" },
		{ label: "Customer Service" },
		{ label: "Terms and Conditions", to: "/terms-and-conditions" },
		{ label: "Privacy Policy" },
		{ label: "Site Map" },
		{ label: "Search Terms" },
		{ label: "Conatct Us", to: "/contact-us" },
	];

	const accountLinks = [
		{ label: "Sign In", to: "/login-or-create-account" },
		{ label: "View Cart", to: "/shopping-cart" },
		{ label: "My Wishlist", to: "/wishlist" },
	];

	return (
		<footer className="mt-2 sm:mt-3">
			<div className="mx-4 border-t border-[#0e3b56] bg-[#022d47] text-[#c9d9e5] sm:mx-6 lg:mx-8">
				<div className="px-4 pt-3 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 pb-12 sm:grid-cols-2 lg:grid-cols-4">
				<section>
					<h3 className="m-0 text-[24px] font-medium uppercase text-white">Contact Us</h3>
					<p className="mt-4 text-[12px]">yoursitename.com</p>
					<p className="mt-2 text-[17px] uppercase tracking-wide text-white">Call 24/7: 888 - 201 -8899</p>
					<p className="mt-2 text-[12px] leading-relaxed">
						Your Address:
						<br />
						Street
						<br />
						State & Zip Code
						<br />
						City & Country
					</p>
					<p className="mt-2 text-[12px]">Email: serviceemail@yoursitename.com</p>

					<div className="mt-5 flex items-center gap-2">
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noreferrer"
								aria-label={social.label}
								className="flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-bold text-white no-underline"
								style={{ backgroundColor: social.bg }}
							>
								{social.short}
							</a>
						))}
					</div>
				</section>

				<section>
					<h3 className="m-0 text-[24px] font-medium uppercase text-white">Information</h3>
					<ul className="mt-4 space-y-3 p-0 text-[13px] uppercase text-[#d3e2ed]">
						{infoLinks.map((item) => (
							<li key={item.label} className="list-none border-b border-[#4f7288] pb-1">
								{item.to ? (
									<Link to={item.to} className="no-underline text-inherit">
										{item.label}
									</Link>
								) : (
									<a href="#" className="no-underline text-inherit">
										{item.label}
									</a>
								)}
							</li>
						))}
					</ul>
				</section>

				<section>
					<h3 className="m-0 text-[24px] font-medium uppercase text-white">My Account</h3>
					<ul className="mt-4 space-y-3 p-0 text-[13px] uppercase text-[#d3e2ed]">
						{accountLinks.map((item) => (
							<li key={item.label} className="list-none border-b border-[#4f7288] pb-1">
								{item.to ? (
									<Link to={item.to} className="no-underline text-inherit">
										{item.label}
									</Link>
								) : (
									<a href="#" className="no-underline text-inherit">
										{item.label}
									</a>
								)}
							</li>
						))}
					</ul>
				</section>

				<section>
					<h3 className="m-0 text-[24px] font-medium uppercase text-white">Signup For A News Leter</h3>
					<label className="mt-4 block text-[13px] uppercase text-[#d3e2ed]">Sign Up For Our News Leter:</label>
					<input
						type="email"
						className="mt-2 h-10 w-full border border-[#7996ab] bg-[#e8edf1] px-3 text-[13px] text-[#223847] outline-none"
						aria-label="Newsletter email"
					/>

					<p className="mt-6 text-[13px] uppercase text-[#d3e2ed]">Payment Solutions</p>
					<div className="mt-2 grid grid-cols-5 gap-1">
						<span className="flex h-7 items-center justify-center rounded bg-[#c11e2f] text-[10px] font-bold text-white">Mcard</span>
						<span className="flex h-7 items-center justify-center rounded bg-[#f2b705] text-[10px] font-bold text-[#1a2a35]">Maestro</span>
						<span className="flex h-7 items-center justify-center rounded bg-[#1e6ec7] text-[10px] font-bold text-white">Discover</span>
						<span className="flex h-7 items-center justify-center rounded bg-[#274f89] text-[10px] font-bold text-white">Visa</span>
						<span className="flex h-7 items-center justify-center rounded bg-[#f5f5f5] text-[10px] font-bold text-[#195f9d]">PayPal</span>
					</div>
				</section>
					</div>

					<div className="border-t border-[#1c425b] py-6 text-center">
						<p className="m-0 text-[13px] text-[#d3e2ed]">© 2014 Hothtubspaservice.com. All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;