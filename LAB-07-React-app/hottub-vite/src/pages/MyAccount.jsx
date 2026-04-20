import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

const recentOrders = [
	{ id: "#303", date: "December 18, 2014", status: "On hold", total: "$ 699.00" },
	{ id: "#307", date: "December 18, 2014", status: "On hold", total: "$ 799.00" },
];

function MyAccountPage() {
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
					<span className="text-[#5b89aa]">User Account</span>
					<span className="mx-1">&gt;</span>
					<span>My Account</span>
				</div>

				<h1 className="text-[40px] font-semibold leading-none text-[#283646]">User Profile Details</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<h2 className="text-[20px] font-semibold text-[#2d4151]">User profile</h2>
					<p className="mt-2 max-w-[780px] text-[11px] leading-relaxed text-[#636363]">
						Hello User name! From your account you can view your recent orders, manage your shipping and billing addresses,
						and edit your password and account details.
					</p>
					<Link to="/edit-profile" className="mt-3 inline-block bg-[#ef101f] px-4 py-2 text-[10px] font-semibold uppercase text-white no-underline">
						Edit Profile
					</Link>

					<div className="mt-8">
						<h3 className="text-[18px] font-semibold text-[#2d4151]">Recent Orders</h3>
						<div className="mt-3 overflow-hidden border-t border-[#dcdcdc]">
							<div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_120px] border-b border-[#dcdcdc] bg-[#f9f9f9] px-3 py-2 text-[11px] font-semibold text-[#66737a]">
								<div>Order</div>
								<div>Date</div>
								<div>Status</div>
								<div>Total</div>
								<div>Options</div>
							</div>
							{recentOrders.map((order) => (
								<div key={order.id} className="grid grid-cols-[1fr_1.5fr_1fr_1fr_120px] items-center border-b border-[#dcdcdc] px-3 py-3 text-[11px] text-[#555555]">
									<div className="text-[#3f90c8]">{order.id}</div>
									<div>{order.date}</div>
									<div>{order.status}</div>
									<div>{order.total}</div>
									<div>
										<Link to="/order-details" className="flex h-8 items-center justify-center bg-[#ef101f] px-3 text-[10px] font-semibold uppercase text-white no-underline">
											View Orders
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="mt-8">
						<h3 className="text-[18px] font-semibold text-[#2d4151]">My Addresses</h3>
						<p className="mt-2 text-[11px] text-[#636363]">The following addresses will be used on the checkout page by default.</p>

						<div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
							<div>
								<h4 className="border-b border-[#dcdcdc] pb-2 text-[16px] font-semibold text-[#2d4151]">Billing address</h4>
								<p className="mt-4 text-[11px] leading-relaxed text-[#636363]">
									Farman Javadi
									<br />
									Hottb Spas
									<br />
									Plot 10 Tech Society
									<br />
									California CA 20112
									<br />
									United State
								</p>
								<Link to="/edit-billing-address" className="mt-4 inline-block bg-[#ef101f] px-4 py-2 text-[10px] font-semibold uppercase text-white no-underline">
									Edit Billing Address
								</Link>
							</div>

							<div>
								<h4 className="border-b border-[#dcdcdc] pb-2 text-[16px] font-semibold text-[#2d4151]">Shipping address</h4>
								<p className="mt-4 text-[11px] leading-relaxed text-[#636363]">
									Farman Javadi
									<br />
									Hottb Spas
									<br />
									Plot 10 Tech Society
									<br />
									California CA 20112
									<br />
									United State
								</p>
								<Link to="/edit-shipping-address" className="mt-4 inline-block bg-[#ef101f] px-4 py-2 text-[10px] font-semibold uppercase text-white no-underline">
									Edit Shipping Address
								</Link>
							</div>
						</div>
					</div>

					<div className="mt-8 h-[360px] border border-[#e2e2e2] bg-[#ececec]" />
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

export default MyAccountPage;

