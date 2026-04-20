import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

const termsSections = [
	{
		title: "1. Interpretation",
		items: [
			"In these conditions of sale:",
			"The Company means The Edge (Systems) Limited.",
			"The Goods means the goods or services or company offering, buying, hiring or lending goods from the Company.",
			"The Contract means any contract between the Company and the Buyer for the sale and purchase of the goods incorporating these conditions.",
		],
	},
	{
		title: "2. Risk and title",
		items: [
			"Risk in the products will pass to the customer as soon as they are delivered to the customer.",
			"The Company reserve the right to bill and collect the amount of the goods until full payment is received.",
			"The Edge shall be entitled to recover the goods from the Buyer should the Buyer be in default of any payment or should a receiver be appointed.",
		],
	},
	{
		title: "3. Charges",
		items: [
			"All prices advertised are subject to VAT which is payable in addition by the Buyer.",
			"The Edge reserves the right to amend prices at any time in the case of errors or price changes.",
		],
	},
	{
		title: "4. Payment",
		items: [
			"Payment is by debit/credit card or cheque; cheques will need to clear before dispatch of the goods will be made.",
			"Credit accounts are subject to status and approval. Any accounts placed on hold will be released once cleared payment is received.",
		],
	},
	{
		title: "5. Delivery",
		items: [
			"Delivery schedules are subject to availability and no liability shall be accepted for any failure in delivery dates.",
			"Delivery costs will be added and advised at checkout stage.",
		],
	},
	{
		title: "6. Force Majeure",
		items: [
			"Neither party shall have any liability to the other for any failure or delay in performing its obligations due to circumstances beyond control.",
		],
	},
	{
		title: "7. Refunds",
		items: [
			"Goods may be returned in original condition and packaging within a reasonable time if defective.",
			"Delivery charges will not be refunded under any circumstances.",
		],
	},
	{
		title: "8. General",
		items: [
			"No modification or amendment of these terms shall be valid unless agreed in writing and signed by authorized representatives.",
			"All contracts are subject to English law.",
		],
	},
];

function TermsAndConditionsPage() {
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
					<span>Terms and Conditions</span>
				</div>

				<h1 className="text-[28px] font-semibold text-[#2d4151]">Terms and Conditions for Sale</h1>

				<section className="mt-3 border border-[#d9d9d9] bg-[#efefef] p-4">
					<h2 className="text-[16px] font-semibold text-[#2d4151]">General Terms and Conditions</h2>
					<p className="mt-1 text-[11px] text-[#636363]">General Terms and conditions for Business, Payment and Delivery for Hot tubs and Spas</p>

					<div className="mt-4 space-y-4 text-[11px] text-[#4f4f4f]">
						{termsSections.map((section) => (
							<div key={section.title}>
								<p className="font-semibold text-[#353535]">{section.title}</p>
								<ul className="mt-2 space-y-1 pl-4">
									{section.items.map((item) => (
										<li key={item} className="list-disc">{item}</li>
									))}
								</ul>
							</div>
						))}
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

export default TermsAndConditionsPage;
