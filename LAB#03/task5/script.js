// ============================================================
// Task 5 – Product Manager Using ES6 Map
// ============================================================

// ============================================================
// Step 1: Define the Product class
// Each product has an id, name, price, and category.
// ============================================================
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

// ============================================================
// Step 2: Create a Map to store products
// Key   = Product ID (Number)
// Value = Product object
// ============================================================
const productMap = new Map();

// ============================================================
// Step 3: Add at least 5 products into the Map
// ============================================================
const initialProducts = [
    new Product(1, 'Wireless Headphones', 2500, 'Electronics'),
    new Product(2, 'Running Shoes', 4500, 'Footwear'),
    new Product(3, 'Backpack Pro', 1800, 'Accessories'),
    new Product(4, 'Mechanical Keyboard', 6500, 'Electronics'),
    new Product(5, 'Desk Lamp LED', 1200, 'Home & Office')
];

// Use .set() to add each product with its ID as the key
initialProducts.forEach((product) => {
    productMap.set(product.id, product);
});

// ============================================================
// DOM Element References
// ============================================================
const productIdInput = document.getElementById('productIdInput');
const searchBtn = document.getElementById('searchBtn');
const deleteBtn = document.getElementById('deleteBtn');
const showAllBtn = document.getElementById('showAllBtn');
const totalBtn = document.getElementById('totalBtn');
const statusMsg = document.getElementById('statusMsg');
const outputArea = document.getElementById('outputArea');
const totalBadge = document.getElementById('totalBadge');

// ============================================================
// Helper – Set the status message with a CSS class
// ============================================================
const setStatus = (text, type = 'info') => {
    statusMsg.textContent = text;
    statusMsg.className = `msg-${type}`;   // msg-success | msg-warn | msg-error | msg-info
};

// ============================================================
// Helper – Get the ID from the input field (with validation)
// Returns the numeric ID or null if invalid.
// ============================================================
const getInputId = () => {
    const raw = productIdInput.value.trim();

    // Check if the input is empty
    if (raw === '') {
        setStatus('⚠️ Please enter a Product ID.', 'warn');
        return null;
    }

    const id = parseInt(raw, 10);

    // Check for a valid positive integer
    if (isNaN(id) || id <= 0) {
        setStatus('⚠️ Product ID must be a positive number.', 'warn');
        return null;
    }

    return id;
};

// ============================================================
// Feature 1: Search Product by ID
// Uses Map .has() and .get() to look up the product.
// Displays the product details inside a styled card.
// ============================================================
const searchProduct = () => {
    const id = getInputId();
    if (id === null) return;

    // Hide total badge if visible
    totalBadge.style.display = 'none';

    if (productMap.has(id)) {
        // Product found — get it from the Map
        const p = productMap.get(id);

        // Build a result card and inject into outputArea
        outputArea.innerHTML = `
            <div class="search-card">
                <p><strong>ID:</strong> ${p.id}</p>
                <p><strong>Name:</strong> ${p.name}</p>
                <p><strong>Price:</strong> <span class="price-cell">Rs. ${p.price.toLocaleString()}</span></p>
                <p><strong>Category:</strong> <span class="category-tag">${p.category}</span></p>
            </div>
        `;
        setStatus(`✅ Product #${id} found.`, 'success');
    } else {
        // Product not found
        outputArea.innerHTML = '';
        setStatus(`❌ No product found with ID ${id}.`, 'error');
    }
};

// ============================================================
// Feature 2: Delete Product by ID
// Uses Map .has() and .delete() to remove the product.
// ============================================================
const deleteProduct = () => {
    const id = getInputId();
    if (id === null) return;

    // Hide total badge if visible
    totalBadge.style.display = 'none';

    if (productMap.has(id)) {
        // Get name before deleting (for the message)
        const name = productMap.get(id).name;

        // Remove the product from the Map
        productMap.delete(id);

        outputArea.innerHTML = '';
        setStatus(`🗑️ "${name}" (ID ${id}) deleted. Remaining: ${productMap.size}`, 'success');
    } else {
        setStatus(`❌ Cannot delete — no product with ID ${id}.`, 'error');
    }
};

// ============================================================
// Feature 3: Display All Products in a Table
// Iterates over the Map using .forEach() and builds an
// HTML <table> dynamically.
// ============================================================
const showAllProducts = () => {
    // Hide total badge if visible
    totalBadge.style.display = 'none';

    // Check if the Map is empty
    if (productMap.size === 0) {
        outputArea.innerHTML = '';
        setStatus('📭 No products to display — the Map is empty.', 'warn');
        return;
    }

    // Build the table header
    let tableHTML = `
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
    `;

    // Iterate over the Map and add a row for each product
    productMap.forEach((product, key) => {
        tableHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td class="price-cell">Rs. ${product.price.toLocaleString()}</td>
                <td><span class="category-tag">${product.category}</span></td>
            </tr>
        `;
    });

    tableHTML += `
                </tbody>
            </table>
        </div>
    `;

    // Inject the table into the output area
    outputArea.innerHTML = tableHTML;
    setStatus(`📋 Showing all ${productMap.size} product(s).`, 'info');
};

// ============================================================
// Feature 4: Display Total Number of Products using .size
// ============================================================
const showTotal = () => {
    outputArea.innerHTML = '';
    totalBadge.style.display = 'block';
    totalBadge.textContent = `📊 Total Unique Products: ${productMap.size}`;
    setStatus('', 'info');
};

// ============================================================
// Event Listeners — attach each button to its handler
// ============================================================
searchBtn.addEventListener('click', searchProduct);
deleteBtn.addEventListener('click', deleteProduct);
showAllBtn.addEventListener('click', showAllProducts);
totalBtn.addEventListener('click', showTotal);

// Allow pressing Enter in the input to trigger Search
productIdInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchProduct();
    }
});

// ============================================================
// Initial Render — show all products on page load
// ============================================================
showAllProducts();
