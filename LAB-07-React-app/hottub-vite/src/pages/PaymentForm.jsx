import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

function PaymentFormPage() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div>
			<Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} onSearchSubmit={() => {}} cartCount={2} />

			<main className="mx-4 mt-4 border border-[#d7d7d7] bg-[#f3f3f3] p-4 sm:mx-6 lg:mx-8">
				<div className="mb-4 text-[11px] text-[#6b7d89]">
					<NavLink to="/hottub-main" className="text-[#3f90c8] no-underline">
						Home
					</NavLink>
					<span className="mx-1">&gt;</span>
					<span>Payment</span>
				</div>

				<h1 className="text-[28px] font-semibold text-[#2d4151]">Secure Checkouts</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<h2 className="text-[14px] font-semibold text-[#2d4151]">Payment Information</h2>

					<div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
						<div>
							<div className="flex items-center gap-2">
								<span className="text-[12px] font-bold text-[#ef101f]">Step 1.</span>
								<span className="text-[12px] font-semibold text-[#3c3c3c]">Billing Address</span>
							</div>

							<div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-[100px_1fr] sm:items-center">
								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">First Name *</label>
								<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Last Name *</label>
								<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Email *</label>
								<input type="email" className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Phone *</label>
								<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Address *</label>
								<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">City *</label>
								<select className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]">
									<option>New York</option>
								</select>

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">State *</label>
								<select className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]">
									<option>New York</option>
								</select>

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Zip Code *</label>
								<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Country *</label>
								<select className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]">
									<option>United States</option>
								</select>
							</div>

							<label className="mt-3 inline-flex items-center gap-2 text-[10px] text-[#5f5f5f]">
								<input type="checkbox" />
								Ship to a different address
							</label>

							<div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-[100px_1fr] sm:items-center">
								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">First Name *</label>
								<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Last Name *</label>
								<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Email *</label>
								<input type="email" className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Phone *</label>
								<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Address *</label>
								<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">City *</label>
								<select className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]">
									<option>New York</option>
								</select>

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">State *</label>
								<select className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]">
									<option>New York</option>
								</select>

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Zip Code *</label>
								<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />

								<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Country *</label>
								<select className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]">
									<option>United States</option>
								</select>
							</div>
						</div>

						<div className="space-y-6">
							<div>
								<div className="flex items-center gap-2">
									<span className="text-[12px] font-bold text-[#ef101f]">Step 2.</span>
									<span className="text-[12px] font-semibold text-[#3c3c3c]">Card Details</span>
								</div>

								<div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-[90px_1fr] sm:items-center">
									<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Card Type *</label>
									<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" value="Master Card" readOnly />

									<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Card Number *</label>
									<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" value="1234 5678 9123 4567" readOnly />

									<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Expiration *</label>
									<div className="flex gap-2">
										<select className="h-6 w-full border border-[#d2d2d2] bg-white px-2 text-[11px]">
											<option>01</option>
											<option>02</option>
										</select>
										<select className="h-6 w-full border border-[#d2d2d2] bg-white px-2 text-[11px]">
											<option>December</option>
										</select>
										<select className="h-6 w-full border border-[#d2d2d2] bg-white px-2 text-[11px]">
											<option>2015</option>
										</select>
									</div>

									<label className="text-right text-[11px] font-semibold text-[#6a6a6a]">Secure Code *</label>
									<input className="h-6 border border-[#d2d2d2] bg-white px-2 text-[11px]" />
								</div>

								<p className="mt-3 text-[10px] text-[#7a7a7a]">Note: Please ensure the billing address you enter matches your card details.</p>
								<NavLink to="/terms-and-conditions" className="text-[10px] text-[#3f90c8] no-underline">
									I accept Terms and Conditions
								</NavLink>
							</div>

							<div>
								<div className="flex items-center gap-2">
									<span className="text-[12px] font-bold text-[#ef101f]">Step 3.</span>
									<span className="text-[12px] font-semibold text-[#3c3c3c]">Review Your Order</span>
								</div>

								<div className="mt-3 border border-[#d9d9d9] bg-white p-3 text-[11px] text-[#4f4f4f]">
									<div className="grid grid-cols-[1.5fr_70px_70px_80px] border-b border-[#e7e7e7] pb-2 text-[10px] text-[#6c6c6c]">
										<div>Item name</div>
										<div className="text-center">Price</div>
										<div className="text-center">Quantity</div>
										<div className="text-right">Total</div>
									</div>
									<div className="grid grid-cols-[1.5fr_70px_70px_80px] py-2">
										<div>XS SCYVA X SERIES 119</div>
										<div className="text-center">$ 690</div>
										<div className="text-center">1000</div>
										<div className="text-right">12000</div>
									</div>
									<div className="mt-2 text-right font-semibold text-[#2d2d2d]">
										Total with shipping: <span className="ml-4">$ 690.00</span>
									</div>
								</div>

								<Link to="/order-summary" className="mt-3 flex h-7 items-center gap-2 bg-[#7fbe3b] px-3 text-[10px] font-semibold uppercase text-white no-underline">
									<span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-white/20">🔒</span>
									Place Your Order
								</Link>
							</div>
						</div>
					</div>

					<div className="mt-6 flex flex-wrap items-center justify-end gap-4 text-[11px] text-[#6f6f6f]">
						<p>Cart summary (2 items)</p>
						<p className="font-semibold text-[#2d2d2d]">Total: $21.00</p>
					</div>

					<div className="mt-2 flex flex-wrap items-center justify-end gap-3">
						<button type="button" className="h-8 border border-[#d2d2d2] bg-white px-3 text-[10px] uppercase text-[#6f6f6f]">
							Continue Shopping
						</button>
						<button type="button" className="h-8 bg-[#ef101f] px-4 text-[10px] font-semibold uppercase text-white">
							Proceed to checkout
						</button>
					</div>
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

export default PaymentFormPage;
