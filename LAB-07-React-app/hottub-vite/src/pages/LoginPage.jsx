import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

function LoginPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setLoginData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage("Login form is ready. Hook your backend here.");
		console.log("Login submitted", loginData);
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
					<span>My Account</span>
				</div>

				<h1 className="text-[40px] font-semibold leading-none text-[#283646]">Login Or Creat Account</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						<div className="lg:border-r lg:border-[#cfcfcf] lg:pr-6">
							<h2 className="text-[20px] font-semibold text-[#2d4151]">User Login Details</h2>
							<p className="mt-3 text-[11px] text-[#636363]">Please sign in below with your login information.</p>
							<p className="mt-2 text-[11px] font-semibold text-[#5c5c5c]">*Required Fields</p>

							<form className="mt-4 max-w-[620px]" onSubmit={handleSubmit}>
								<div className="grid grid-cols-1 gap-2 sm:grid-cols-[120px_1fr] sm:items-center">
									<label className="text-right text-[12px] font-semibold text-[#595959]">Email *</label>
									<input
										type="email"
										name="email"
										value={loginData.email}
										onChange={handleChange}
										required
										className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none"
									/>

									<label className="text-right text-[12px] font-semibold text-[#595959]">Password *</label>
									<input
										type="password"
										name="password"
										value={loginData.password}
										onChange={handleChange}
										required
										className="h-8 border border-[#d6d6d6] bg-white px-2 text-[12px] outline-none"
									/>

									<div className="sm:col-start-2">
										<label className="flex items-center gap-2 text-[11px] text-[#5f5f5f]">
											<input type="checkbox" name="rememberMe" checked={loginData.rememberMe} onChange={handleChange} />
											Remember me the next time I visit
										</label>
									</div>
								</div>

								<div className="mt-4 flex flex-wrap items-center gap-4">
									<button type="submit" className="h-9 w-[100px] cursor-pointer bg-[#ef101f] text-[12px] font-semibold uppercase text-white">
										Sign In
									</button>
									<NavLink to="/forget-password" className="text-[12px] text-[#3f90c8] no-underline">
										Forget your password?
									</NavLink>
								</div>

								{message ? <p className="mt-3 text-[11px] text-[#2c6f38]">{message}</p> : null}
							</form>
						</div>

						<div>
							<h2 className="text-[20px] font-semibold text-[#2d4151]">New Customer</h2>
							<p className="mt-3 text-[11px] text-[#636363]">As a registered A1.com customer you can:</p>
							<ul className="mt-3 space-y-2 pl-5 text-[11px] text-[#636363]">
								<li>Store billing &amp; shipping information</li>
								<li>Check your order status</li>
								<li>Track your delivery status</li>
								<li>View your order history</li>
							</ul>
							<Link to="/register" className="mt-4 inline-flex h-9 items-center bg-[#ef101f] px-4 text-[12px] font-semibold uppercase text-white no-underline">
								Create New Account
							</Link>
						</div>
					</div>
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

export default LoginPage;

