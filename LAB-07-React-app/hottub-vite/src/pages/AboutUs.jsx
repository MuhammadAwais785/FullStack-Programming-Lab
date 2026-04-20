import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

const teamMembers = [
	{ id: 1, name: "Jennifer lawrence", role: "Business Consultant" },
	{ id: 2, name: "Jennifer lawrence", role: "Business Consultant" },
	{ id: 3, name: "Jennifer lawrence", role: "Business Consultant" },
	{ id: 4, name: "Jennifer lawrence", role: "Business Consultant" },
];

function AboutUsPage() {
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
					<span>About Us</span>
				</div>

				<h1 className="text-[40px] font-semibold leading-none text-[#283646]">About Us</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<h2 className="text-[20px] font-semibold text-[#2d4151]">Welcome to the Company</h2>
					<div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-12">
						<div className="space-y-3 text-[11px] leading-relaxed text-[#575757] lg:col-span-8">
							<p>
								This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
								lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
								nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
								ornare odio.
							</p>
							<p>
								This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
								lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
								nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
								ornare odio.
							</p>
						</div>

						<div className="flex items-center justify-center border border-[#d3d3d3] bg-white p-2 lg:col-span-4">
							<div className="flex h-[170px] w-full items-center justify-center bg-[#d9e0e5] text-[12px] uppercase tracking-wide text-[#466073]">
								About Image
							</div>
						</div>
					</div>
				</section>

				<section className="mt-4 border border-[#d9d9d9] bg-[#efefef] p-4">
					<h2 className="text-[20px] font-semibold text-[#2d4151]">Our Company members</h2>
					<p className="mt-2 text-[11px] text-[#5f5f5f]">
						This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
					</p>

					<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
						{teamMembers.map((member) => (
							<article key={member.id} className="border border-[#d4d4d4] bg-white p-2 text-center">
								<div className="flex h-[130px] items-center justify-center bg-[#dde3e8] text-[11px] uppercase tracking-wide text-[#4f687a]">
									Member Image
								</div>
								<h3 className="mt-2 text-[24px] font-semibold text-[#2f4352]">{member.name}</h3>
								<p className="text-[11px] uppercase text-[#8b8b8b]">{member.role}</p>
								<p className="mt-1 text-[10px] text-[#8c8c8c]">This is Photoshop's version of lorem ipsum.</p>
							</article>
						))}
					</div>

					<div className="mt-4 h-[380px] border border-[#e0e0e0] bg-[#ececec]" />
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

export default AboutUsPage;

