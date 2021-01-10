//abir y cerrarel carrito de compras

const cartButton = document.getElementById("cartButton");
const body = document.getElementById("body");
const bodys = document.getElementById("bodys");
const headers = document.getElementById("header");
const navFlotante = document.getElementById("navbar-three");
const cart = document.getElementById("cart");
const cartButtonClose = document.getElementById("cartButtonClose");

cartButton.addEventListener("click", () => {
  body.classList.toggle("active");

  cart.classList.toggle("active");
  bodys.style.filter = "blur(32px)";
  headers.classList.toggle("blur");
  navFlotante.classList.toggle("blur");
});

cartButtonClose.addEventListener("click", () => {
  body.classList.remove("active");

  cart.classList.remove("active");
  bodys.classList.remove("blur");
  bodys.style.filter = "blur(0px)";
  bodys.style.transition = "0.8s all";
  headers.classList.remove("blur");
  navFlotante.classList.remove("blur");
});
