import React, { useState } from "react";
import Navbar from "../components/navbar";
import CategoryContent from "../components/categorycontent";
import Footer from "../components/footer";

function CategoryPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [cartCount, setCartCount] = useState(1);

	const handleAddToCart = (productTitle) => {
		setCartCount((prev) => prev + 1);
		console.log(`${productTitle} added to cart from category`);
	};

	return (
		<div>
			<Navbar
				searchQuery={searchQuery}
				onSearchChange={setSearchQuery}
				onSearchSubmit={() => {}}
				cartCount={cartCount}
			/>
			<CategoryContent searchQuery={searchQuery} onAddToCart={handleAddToCart} />
			<Footer />
		</div>
	);
}

export default CategoryPage;

