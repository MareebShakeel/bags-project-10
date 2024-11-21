// Load cart data from localStorage
function fetchCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    renderCart(cart);
}

// Render cart items on the cart.html page
function renderCart(cartItems) {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear previous content

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
        </tr>
    `;

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>
                <button onclick="removeFromCart(${index})">Remove</button>
            </td>
        `;
        table.appendChild(row);
    });

    cartContainer.appendChild(table);
    cartContainer.innerHTML += '<a href="checkout.html">Proceed to Checkout</a>';
}

// Remove an item from the cart
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove item by index

    localStorage.setItem('cart', JSON.stringify(cart));
    fetchCartItems();
}

// Load cart items on page load
document.addEventListener('DOMContentLoaded', fetchCartItems);
