const express = require("express");
const app = express();
const path = require("path");
const port = 5500;
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
//archivos estaticInicio
app.use(express.static("public"));

//configuar templates engines y los layouts
app.use(expressLayout);
app.set("views", path.join(__dirname, "src/views/"));
app.set("view engine", "ejs");
//rutas
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/product/", (req, res) => {
  res.render("section-product/product.ejs");
});
app.get("/user", (req, res) => {
  res.render("section-product/product.ejs");
});
app.get("/just-product", (req, res) => {
  res.render("section-product/just-product.ejs");
});

app.get("/pedido", (req, res) => {
  res.render("section-pedido/pedido.ejs");
});

app.listen(port, () => {
  console.log("server on port  : ", port);
});
