import React, { useState } from "react";
import Navbar from "../components/navbar";
import Showcase from "../components/showcase";
import NewProducts from "../components/newproducts";
import Footer from "../components/footer";

function HotttubMainPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [cartCount, setCartCount] = useState(1);

	const handleSearchChange = (value) => {
		setSearchQuery(value);
	};

	const handleSearchSubmit = () => {
		// Search filtering is applied in NewProducts using current searchQuery state.
	};

	const handleAddToCart = (productTitle) => {
		setCartCount((prev) => prev + 1);
		console.log(`${productTitle} added to cart`);
	};

	return (
		<div>
			<Navbar
				searchQuery={searchQuery}
				onSearchChange={handleSearchChange}
				onSearchSubmit={handleSearchSubmit}
				cartCount={cartCount}
			/>
			<Showcase />
			<NewProducts searchQuery={searchQuery} onAddToCart={handleAddToCart} />
			<Footer />
		</div>
	);
}

export default HotttubMainPage;
