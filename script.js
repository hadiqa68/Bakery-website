
let cartCount = 0;

const cartNumber = document.querySelector("#cartCount");
const cartBtn = document.querySelector("#cartBtn");
const search = document.querySelector("#search");
const products = document.querySelectorAll(".product-card");
const addButtons = document.querySelectorAll(".add-btn");

// Add products to cart
addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount++;
        cartNumber.textContent = cartCount;

        const productName = button.parentElement.querySelector("h3").textContent;

        alert(productName + " added to your cart!");
    });
});

// Show cart information
cartBtn.addEventListener("click", function() {
    alert("You have " + cartCount + " item(s) in your cart.");
});

// Search products by name
search.addEventListener("input", function() {
    const searchText = search.value.toLowerCase();
    let found = 0;

    products.forEach(function(product) {
        const productName = product.dataset.name.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "block";
            found++;
        } else {
            product.style.display = "none";
        }
    });

    document.querySelector("#noResults").hidden = found !== 0;
});

// Demo contact form
document.querySelector("#contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.querySelector("#formMessage").textContent =
        "Thank you! Your demo message has been received.";

    this.reset();
});

// Automatically update footer year
document.querySelector("#year").textContent = new Date().getFullYear();