const express = require("express");
const app = express();
const path = require("path");
const port = 5500;
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
//midlewares----------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
