//abir y cerrarel carrito de compras
const cartButton = document.getElementById("cartButton");
const body = document.getElementById("body");
const cart = document.getElementById("cart");
const cartButtonClose = document.getElementById("cartButtonClose");
cartButton.addEventListener("click", () => {
  body.classList.toggle("active");
  cart.classList.toggle("active");
});

cartButtonClose.addEventListener("click", () => {
  body.classList.remove("active");
  cart.classList.remove("active");
});
