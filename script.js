// Function to handle adding to cart
function addToCart() {
    alert("Item has been added to your cart!");
}

// Function to handle buying an item
function buyNow() {
    alert("Thank you for your purchase!");
}

// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.buttons button:first-child');
    const buyNowButtons = document.querySelectorAll('.buttons button:last-child');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    buyNowButtons.forEach(button => {
        button.addEventListener('click', buyNow);
    });
});
