// Select all "Add to Cart" buttons in the New Arrivals section
const addToCartButtons = document.querySelectorAll('#new-arrivals .add-to-cart');

// Function to handle adding product to the cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Get the product name and price from the data attributes
        const productName = event.target.closest('.product-item').getAttribute('data-name');
        const productPrice = event.target.closest('.product-item').getAttribute('data-price');

        // Get the cart count element and update it
        const cartCountElement = document.getElementById('cart-count');
        let currentCartCount = parseInt(cartCountElement.textContent);
        currentCartCount++;
        cartCountElement.textContent = currentCartCount;

        // Optionally, show an alert or update the UI
        alert(`Added ${productName} to cart for $${productPrice}`);
    });
});

// Similar functionality can be replicated for other product categories by selecting buttons within those sections.
