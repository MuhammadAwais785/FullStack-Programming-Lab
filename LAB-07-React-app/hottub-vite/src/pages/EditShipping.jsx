import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

function EditShippingAddressPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		city: "",
		state: "",
		zipCode: "",
		country: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Shipping address updated", formData);
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
					<span className="text-[#5b89aa]">User Account</span>
					<span className="mx-1">&gt;</span>
					<span>My Account</span>
				</div>

				<h1 className="text-[40px] font-semibold leading-none text-[#283646]">Edit Shipping Address</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<p className="text-[11px] text-[#636363]">Please fill the form below to update your Profile details.</p>
					<p className="mt-2 text-[11px] font-semibold text-[#5c5c5c]">*Required Fields</p>

					<form className="mt-4 max-w-[650px]" onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-[120px_1fr] sm:items-center">
							<label className="text-right text-[12px] font-semibold text-[#595959]">First Name *</label>
							<input name="firstName" value={formData.firstName} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Last Name *</label>
							<input name="lastName" value={formData.lastName} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Email *</label>
							<input type="email" name="email" value={formData.email} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Phone *</label>
							<input name="phone" value={formData.phone} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">City *</label>
							<input name="city" value={formData.city} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">State *</label>
							<input name="state" value={formData.state} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Zip Code *</label>
							<input name="zipCode" value={formData.zipCode} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Country *</label>
							<input name="country" value={formData.country} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />
						</div>

						<button type="submit" className="mt-6 h-9 w-[130px] cursor-pointer bg-[#ef101f] text-[11px] font-semibold uppercase text-white">
							Update Address
						</button>
					</form>

					<div className="mt-8 h-[520px] border border-[#e2e2e2] bg-[#ececec]" />
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

export default EditShippingAddressPage;

