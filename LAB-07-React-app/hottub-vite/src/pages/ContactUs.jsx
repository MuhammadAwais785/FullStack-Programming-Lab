import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

function ContactUsPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [formData, setFormData] = useState({
		firstName: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		console.log("Contact form submitted", formData);
	};

	return (
		<div>
			<Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} onSearchSubmit={() => {}} cartCount={1} />

			<main className="mx-4 mt-4 border border-[#d7d7d7] bg-[#f3f3f3] p-4 sm:mx-6 lg:mx-8">
				<div className="mb-4 text-[11px] text-[#6b7d89]">
					<NavLink to="/hottub-main" className="text-[#3f90c8] no-underline">
						Home
					</NavLink>
					<span className="mx-1">&gt;</span>
					<span className="text-[#5b89aa]">Customer Support</span>
					<span className="mx-1">&gt;</span>
					<span>Contact Us</span>
				</div>

				<h1 className="text-[40px] font-semibold leading-none text-[#283646]">Contact Us</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<h2 className="text-[20px] font-semibold text-[#2d4151]">Contact Our Customer Support</h2>
					<p className="mt-1 text-[11px] text-[#636363]">
						To create a new account, please fill in the required information below. Passwords are case sensitive and must be
						6 to 20 characters long.
					</p>

					<div className="mt-6 space-y-2">
						<h3 className="text-[22px] font-semibold text-[#2d4151]">Online Sales &amp; Customer Support</h3>
						<p className="text-[28px] text-[#263b4a]">
							Call Us: <span className="font-medium">020 78989845</span>
						</p>
					</div>

					<div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
						<div>
							<h4 className="text-[18px] font-semibold text-[#2d4151]">Retail Store Location</h4>
							<p className="mt-2 text-[11px] leading-relaxed text-[#636363]">
								Hotub Store Lcc
								<br />
								5000N, Ford avenue
								<br />
								Newyork, NY 20145
								<br />
								888,123,1234
							</p>
						</div>

						<div className="sm:border-l sm:border-[#cfcfcf] sm:pl-8">
							<h4 className="text-[18px] font-semibold text-[#2d4151]">Services</h4>
							<p className="mt-2 text-[11px] leading-relaxed text-[#636363]">
								Hotub Store Lcc
								<br />
								5000N, Ford avenue
								<br />
								Newyork, NY 20145
								<br />
								888,123,1234
							</p>
						</div>
					</div>

					<div className="mt-8">
						<h3 className="text-[20px] font-semibold text-[#2d4151]">Contact Us</h3>

						<form className="mt-3 max-w-[620px]" onSubmit={handleSubmit}>
							<div className="grid grid-cols-1 gap-2 sm:grid-cols-[120px_1fr] sm:items-center">
								<label className="text-right text-[12px] font-semibold text-[#595959]">First name*</label>
								<input
									name="firstName"
									value={formData.firstName}
									onChange={handleInputChange}
									required
									className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none"
								/>

								<label className="text-right text-[12px] font-semibold text-[#595959]">Email*</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
									className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none"
								/>

								<label className="text-right text-[12px] font-semibold text-[#595959]">Subject*</label>
								<input
									name="subject"
									value={formData.subject}
									onChange={handleInputChange}
									required
									className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none"
								/>

								<label className="text-right text-[12px] font-semibold text-[#595959]">Your Message</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									className="h-[140px] border border-[#d6d6d6] bg-white px-2 py-2 text-[12px] outline-none"
								/>
							</div>

							<button
								type="submit"
								className="ml-[120px] mt-4 h-9 w-[100px] cursor-pointer bg-[#ef101f] text-[12px] font-semibold uppercase text-white"
							>
								Submit
							</button>

							{isSubmitted ? <p className="ml-[120px] mt-2 text-[11px] text-[#2c6f38]">Thanks, your message has been submitted.</p> : null}
						</form>
					</div>

					<div className="mt-8 h-[340px] border border-[#e2e2e2] bg-[#ececec]" />
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

export default ContactUsPage;

