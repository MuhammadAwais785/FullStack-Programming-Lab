import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

function OrderSummaryPage() {
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
					<span>User Account</span>
					<span className="mx-1">&gt;</span>
					<span>Order Summary</span>
				</div>

				<h1 className="text-[28px] font-semibold text-[#2d4151]">Order Summary</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<p className="text-[11px] text-[#4a7a2e]">Thank you, your order has been received</p>

					<div className="mt-4 border-t border-[#dcdcdc] pt-4 text-[11px] text-[#4f4f4f]">
						<h2 className="text-[14px] font-semibold text-[#2d4151]">Your Order Summary</h2>
						<div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-[120px_1fr]">
							<div>Order #:</div>
							<div>0033</div>
							<div>Date:</div>
							<div>December 21 2014</div>
							<div>Total:</div>
							<div>1 x $2500 = $2500</div>
						</div>
						<p className="mt-3 text-[10px] text-[#6d6d6d]">
							Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will
							be shipped until the funds have cleared in our account.
						</p>
					</div>

					<div className="mt-6 border-t border-[#dcdcdc] pt-4 text-[11px] text-[#4f4f4f]">
						<h2 className="text-[14px] font-semibold text-[#2d4151]">Your Order Details</h2>
						<div className="mt-3 border border-[#e0e0e0] bg-white">
							<div className="grid grid-cols-[1.4fr_90px_90px] border-b border-[#e7e7e7] bg-[#f8f8f8] px-3 py-2 text-[10px] text-[#6c6c6c]">
								<div>Product</div>
								<div className="text-center">Quantity</div>
								<div className="text-right">Total</div>
							</div>
							<div className="grid grid-cols-[1.4fr_90px_90px] border-b border-[#eeeeee] px-3 py-2">
								<div className="text-[#2f6fb0]">Five person hottub spa with green light inside</div>
								<div className="text-center">1</div>
								<div className="text-right">$ 699.00</div>
							</div>
							<div className="grid grid-cols-[1.4fr_90px_90px] px-3 py-2">
								<div className="text-[#2f6fb0]">Five person hottub spa with green light inside</div>
								<div className="text-center">1</div>
								<div className="text-right">$ 699.00</div>
							</div>
						</div>

						<div className="mt-3 grid grid-cols-[1fr_auto] gap-1 text-[10px]">
							<div className="text-right text-[#6c6c6c]">Cart Subtotal:</div>
							<div className="text-right">$ 1400.00</div>
							<div className="text-right text-[#6c6c6c]">Shipping:</div>
							<div className="text-right">Free shipment</div>
							<div className="text-right text-[#6c6c6c]">Payment method:</div>
							<div className="text-right">Direct Bank Transfer</div>
							<div className="text-right font-semibold text-[#2d2d2d]">Total with shipping:</div>
							<div className="text-right font-semibold text-[#2d2d2d]">$ 1400.00</div>
						</div>
					</div>

					<div className="mt-6 border-t border-[#dcdcdc] pt-4 text-[11px] text-[#4f4f4f]">
						<h2 className="text-[14px] font-semibold text-[#2d4151]">Your Bank details</h2>
						<div className="mt-3 grid grid-cols-[90px_1fr] gap-2">
							<div>Bank:</div>
							<div>Your Bank Name</div>
							<div>Acct #:</div>
							<div>2014 2545 4524 5854</div>
							<div>BIC:</div>
							<div>0124 7654 1245 41212</div>
						</div>
					</div>

					<div className="mt-6 border-t border-[#dcdcdc] pt-4 text-[11px] text-[#4f4f4f]">
						<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
							<div>
								<h3 className="text-[12px] font-semibold text-[#2d4151]">Customer details</h3>
								<p className="mt-2">Customer Name</p>
								<p>email@hottubdirect.com</p>
								<p>888 7578 787</p>
							</div>
							<div>
								<h3 className="text-[12px] font-semibold text-[#2d4151]">Billing address</h3>
								<p className="mt-2">Farukh Javaid</p>
								<p>HotTub Spas</p>
								<p>Plot 10 Tech Society</p>
								<p>California, CA 20112</p>
								<p>United State</p>
							</div>
							<div>
								<h3 className="text-[12px] font-semibold text-[#2d4151]">Shipping address</h3>
								<p className="mt-2">Farukh Javaid</p>
								<p>HotTub Spas</p>
								<p>Plot 10 Tech Society</p>
								<p>California, CA 20112</p>
								<p>United State</p>
							</div>
						</div>
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

export default OrderSummaryPage;
