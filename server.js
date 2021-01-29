const stripe = require("stripe")(
  "sk_test_51IEHvuCICit7kq32S0kcb3DxdeQmWUkpdnASaVOpG0r8ptPbmLsriubTlltMxWzNbbSho2nhN7U8KwYUiuGVqe4P004yblIRpO"
);
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







app.use(function (req, res, next) {
  res.locals.iduser = req.session.iduser;
  next();
});
app.listen(port, () => {
  console.log("server on port  : ", port);
});







//app.post("/checkoutstripe", async (req, res) => {
  //console.log(req.body);
  //const customer = await stripe.customers.create({
    //email: req.body.stripeEmail,
    //source: req.body.stripeToken,
  //});
  //const charge = await stripe.charges.create({
    //amount: req.body.total + "00",
    //currency: "usd",
    //customer: customer.id,
    //description: "ID Pedido : " + req.body.idpedido + " -> Tablon FoodCenter",
  //});
  //res.redirect("http://localhost:5500/fastfood/ordersfull");
//});


