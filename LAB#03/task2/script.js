// ═══════════════════════════════════════════════════════════
//  Task 2 – Online Shopping Cart
//  Rest Operator, Spread Operator & Array Destructuring
// ═══════════════════════════════════════════════════════════

// ── Cart array to hold all products ────────────────────────
const cart = [];

// ── addToCart() using REST operator (...items) ─────────────
function addToCart(...items) {
    for (let i = 0; i < items.length; i++) {
        cart.push(items[i]);
    }
}

// ── Add products with names and images ─────────────────────
addToCart(
    { name: "Laptop", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop" },
    { name: "Headphones", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop" },
    { name: "Keyboard", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop" }
);

addToCart(
    { name: "Mouse", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop" },
    { name: "Monitor", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop" }
);

// ── SPREAD operator – clone cart into updatedCart ───────────
const updatedCart = [...cart];

// ── ARRAY DESTRUCTURING ────────────────────────────────────
const [firstItem, ...remainingItems] = cart;

// ── Console output (as required) ───────────────────────────
console.log(`Total items in cart: ${cart.length}`);
console.log(`First item: ${firstItem.name}`);
console.log(`Remaining items: ${remainingItems.map(i => i.name)}`);
console.log(`Updated (cloned) cart: ${updatedCart.map(i => i.name)}`);

// ═══════════════════════════════════════════════════════════
//  Helper – build a product card
// ═══════════════════════════════════════════════════════════
function buildCard(product, colorClass) {
    return `
        <div class="product-card ${colorClass}">
            <img src="${product.img}" alt="${product.name}" />
            <div class="p-name">${product.name}</div>
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════
//  Display everything dynamically on the page
// ═══════════════════════════════════════════════════════════

// ── Stats row ──────────────────────────────────────────────
document.getElementById('stats-row').innerHTML = `
    <div class="stat-box">
        <div class="num">${cart.length}</div>
        <div class="lbl">Total Items</div>
    </div>
    <div class="stat-box">
        <div class="num">${remainingItems.length}</div>
        <div class="lbl">Remaining</div>
    </div>
    <div class="stat-box">
        <div class="num">${updatedCart.length}</div>
        <div class="lbl">Cloned Cart</div>
    </div>
`;

// ── Cart items (all) ───────────────────────────────────────
let cartHTML = '';
for (let i = 0; i < cart.length; i++) {
    cartHTML += buildCard(cart[i], 'orange');
}
document.getElementById('cart-items').innerHTML = cartHTML;

// ── First item (destructured) ──────────────────────────────
document.getElementById('first-item-section').innerHTML = `
    <h2>🥇 First Item <span class="sub">(Array Destructuring)</span></h2>
    <div class="highlight-box">
        <img src="${firstItem.img}" alt="${firstItem.name}" />
        <div class="text">The first item in cart is: <strong>${firstItem.name}</strong></div>
    </div>
`;

// ── Remaining items (destructured) ─────────────────────────
let remainingHTML = '';
for (let i = 0; i < remainingItems.length; i++) {
    remainingHTML += buildCard(remainingItems[i], 'purple');
}
document.getElementById('remaining-items').innerHTML = remainingHTML;

// ── Cloned cart (spread) ───────────────────────────────────
let clonedHTML = '';
for (let i = 0; i < updatedCart.length; i++) {
    clonedHTML += buildCard(updatedCart[i], 'green');
}
document.getElementById('cloned-cart').innerHTML = clonedHTML;
