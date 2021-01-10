//abir y cerrarel carrito de compras
const userButton = document.getElementById("userButton");
const logins = document.getElementById("logins");
const userButtonClose = document.getElementById("userButtonClose");

userButton.addEventListener("click", () => {
  body.classList.toggle("active");
  logins.classList.toggle("active");
  bodys.style.filter = "blur(32px)";
  headers.classList.toggle("blur");
  navFlotante.classList.toggle("blur");

  console.log("se pulos el boto del user");
});

userButtonClose.addEventListener("click", () => {
  body.classList.remove("active");
  logins.classList.remove("active");
  bodys.classList.remove("blur");
  bodys.style.filter = "blur(0px)";
  headers.classList.remove("blur");
  navFlotante.classList.remove("blur");
  console.log("se pulos el boto del userclose");
});

const cuadroLogin = document.getElementById("login-form");
const cuadroRegister = document.getElementById("register-form");
const buttonActiveLogin = document.getElementById("login-active");
const buttonActiveRegister = document.getElementById("register-active");
/*por defecto el login*/
buttonActiveLogin.style.borderBottom = "2px solid black";
buttonActiveLogin.style.color = "black";
cuadroLogin.classList.add("active");
/**/
buttonActiveRegister.addEventListener("click", () => {
  cuadroRegister.classList.add("active");
  /*botones*/
  buttonActiveLogin.style.borderBottom = "2px solid #cacaca";
  buttonActiveLogin.style.color = "#cacaca";
  buttonActiveRegister.style.borderBottom = "2px solid #000";
  buttonActiveRegister.style.color = "#000";
  /*quitar cuadro de login*/
  cuadroLogin.classList.remove("active");
});
buttonActiveLogin.addEventListener("click", () => {
  cuadroLogin.classList.add("active");
  /*botones*/

  buttonActiveRegister.style.borderBottom = "2px solid #cacaca";
  buttonActiveRegister.style.color = "#cacaca";
  buttonActiveLogin.style.borderBottom = "2px solid #000";
  buttonActiveLogin.style.color = "#000";

  /*quitar cuadro de register*/
  cuadroRegister.classList.remove("active");
});
