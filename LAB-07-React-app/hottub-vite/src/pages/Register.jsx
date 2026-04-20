import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

function RegisterPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
		subscribe: false,
	});
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage("Account creation form is ready. Hook your backend here.");
		console.log("Register submitted", formData);
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
					<span>Register</span>
				</div>

				<h1 className="text-[40px] font-semibold leading-none text-[#283646]">Create New Account</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<h2 className="text-[20px] font-semibold text-[#2d4151]">User Account Details</h2>
					<p className="mt-3 max-w-[760px] text-[11px] text-[#636363]">
						To create a new account, please fill in the required information below. Passwords are case sensitive and
						must be 6 to 20 characters long.
					</p>
					<p className="mt-2 text-[11px] font-semibold text-[#5c5c5c]">*Required Fields</p>

					<form className="mt-4 max-w-[620px]" onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-[120px_1fr] sm:items-center">
							<label className="text-right text-[12px] font-semibold text-[#595959]">Email Address *</label>
							<input name="email" type="email" value={formData.email} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Password *</label>
							<input name="password" type="password" value={formData.password} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Re-enter Password *</label>
							<input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">First Name *</label>
							<input name="firstName" value={formData.firstName} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<label className="text-right text-[12px] font-semibold text-[#595959]">Last Name *</label>
							<input name="lastName" value={formData.lastName} onChange={handleChange} required className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none" />

							<div className="sm:col-start-2">
								<label className="flex items-center gap-2 text-[11px] text-[#5f5f5f]">
									<input name="subscribe" type="checkbox" checked={formData.subscribe} onChange={handleChange} />
									Yes, I want to receive email about new products and specials!
								</label>
							</div>
						</div>

						<div className="mt-5 flex flex-wrap items-center gap-4">
							<button type="submit" className="h-9 cursor-pointer bg-[#ef101f] px-4 text-[12px] font-semibold uppercase text-white">
								Create Account
							</button>
							<NavLink to="/forget-password" className="text-[12px] text-[#3f90c8] no-underline">
								Forget your password?
							</NavLink>
						</div>

						{message ? <p className="mt-3 text-[11px] text-[#2c6f38]">{message}</p> : null}
					</form>
				</section>

				<div className="mt-8 h-[330px] border border-[#e2e2e2] bg-[#ececec]" />

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

export default RegisterPage;
