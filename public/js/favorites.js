//abir y cerrarel carrito de compras
const favoiteButton = document.getElementById("favoriteButton");
const favorites = document.getElementById("favorites");
const favoriteButtonClose = document.getElementById("favoriteButtonClose");

favoriteButton.addEventListener("click", () => {
  body.classList.toggle("active");
  favorites.classList.toggle("active");
  bodys.style.filter = "blur(32px)";
  headers.classList.toggle("blur");
  navFlotante.classList.toggle("blur");

  console.log("se pulos el boto delfavoritp");
});

favoriteButtonClose.addEventListener("click", () => {
  body.classList.remove("active");

  favorites.classList.remove("active");
  bodys.classList.remove("blur");
  bodys.style.filter = "blur(0px)";
  headers.classList.remove("blur");
  navFlotante.classList.remove("blur");
  console.log("se pulos el boto del favoriteclose");
});
