import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

function ForgetPasswordPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [email, setEmail] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		console.log("Forget password request submitted", { email, rememberMe });
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
					<NavLink to="/edit-billing-address" className="text-[#3f90c8] no-underline">
						My Account
					</NavLink>
				</div>

				<h1 className="text-[40px] font-semibold leading-none text-[#283646]">Forget Your Password</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<h2 className="text-[20px] font-semibold text-[#2d4151]">User Account Details</h2>
					<p className="mt-3 text-[11px] text-[#636363]">Please enter your email address below to retrieve your password.</p>
					<p className="mt-2 text-[11px] font-semibold text-[#5c5c5c]">*Required Fields</p>

					<form className="mt-4 max-w-[620px]" onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-[120px_1fr] sm:items-center">
							<label className="text-right text-[12px] font-semibold text-[#595959]">Email *</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none"
							/>

							<div className="sm:col-start-2">
								<label className="flex items-center gap-2 text-[11px] text-[#5f5f5f]">
									<input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
									Remember me the next time I visit
								</label>
							</div>
						</div>

						<button type="submit" className="mt-5 h-9 w-[100px] cursor-pointer bg-[#ef101f] text-[12px] font-semibold uppercase text-white">
							Submit
						</button>

						{isSubmitted ? <p className="mt-2 text-[11px] text-[#2c6f38]">Password retrieval request sent.</p> : null}
					</form>
				</section>

				<div className="mt-8 h-[520px] border border-[#e2e2e2] bg-[#ececec]" />
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

export default ForgetPasswordPage;

