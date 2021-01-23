const express = require("express");
const app = express();
const path = require("path");
const port = 5500;
const ejs = require("ejs");
var cookieSession = require("cookie-session");
const session = require("express-session");
var cookieParser = require("cookie-parser");
const expressLayout = require("express-ejs-layouts");
app.use(cookieParser());
//midlewares----------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    secret: "eadfcewdasfc" /* una cadena de texto aleatoria */,
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
//configuar templates engines y los layouts---------
app.set("layout", "layoutsFastfood", "layoutsAdmin");
app.use(expressLayout);
app.set("views", path.join(__dirname, "src/views/"));
app.set("view engine", "ejs");
//rutas del adminitrador---------------------------------------------
app.use("/admin", require("./src/routes/admin"));
app.use("/fastfood", require("./src/routes/fastfood"));
app.use("/admin", express.static(path.join(__dirname, "src/public")));
app.use("/fastfood", express.static(path.join(__dirname, "src/public")));
app.listen(port, () => {
  console.log("server on port  : ", port);
});
