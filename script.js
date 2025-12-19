let cartCount = 0;
let cartItems = [];

function addToCart(productName, price) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;

  cartItems.push({ name: productName, price: price });

  alert(productName + " added to cart!");
  console.log(cartItems);
}
