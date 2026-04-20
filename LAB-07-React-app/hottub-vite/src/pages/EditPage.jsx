import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

function EditProfilePage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	});
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage("Profile update form is ready. Hook your backend here.");
		console.log("Profile update", formData);
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
					<span>Edit Profile</span>
				</div>

				<h1 className="text-[40px] font-semibold leading-none text-[#283646]">Edit Profile</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<p className="text-[11px] text-[#636363]">Please fill the form below to update your profile details.</p>
					<p className="mt-2 text-[11px] font-semibold text-[#5c5c5c]">*Required Fields</p>

					<form className="mt-4 max-w-[650px]" onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-[140px_1fr] sm:items-center">
							<label className="text-right text-[12px] font-semibold text-[#595959]">First Name *</label>
							<input name="firstName" value={formData.firstName} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Last Name *</label>
							<input name="lastName" value={formData.lastName} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Email *</label>
							<input type="email" name="email" value={formData.email} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Phone *</label>
							<input name="phone" value={formData.phone} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Current Password *</label>
							<input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">New Password *</label>
							<input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Confirm Password *</label>
							<input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />
						</div>

						<button type="submit" className="mt-6 h-9 w-[140px] cursor-pointer bg-[#ef101f] text-[11px] font-semibold uppercase text-white">
							Update Profile
						</button>

						{message ? <p className="mt-3 text-[11px] text-[#2c6f38]">{message}</p> : null}
					</form>

					<div className="mt-8 h-[420px] border border-[#e2e2e2] bg-[#ececec]" />
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

export default EditProfilePage;
