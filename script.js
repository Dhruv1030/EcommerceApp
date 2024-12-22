document.addEventListener("DOMContentLoaded", () => {
  const proudcts = [
    { id: 1, name: "product1", price: 29.99 },
    { id: 2, name: "product2", price: 19.99 },
    { id: 3, name: "product3", price: 39.99 },
  ];

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  proudcts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>
    ${product.name} - $${product.price.toFixed(2)}
    </span>
    <button data-id='${product.id}'>Add to cart</button>`;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productID = parseInt(e.target.getAttribute("data-id"));
      const product = proudcts.find((p) => p.id === productID);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
  }
});
