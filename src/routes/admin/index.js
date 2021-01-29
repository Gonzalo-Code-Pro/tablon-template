const authController = require("../../controllers/admin/auth/authcontroller");
const express = require("express");
const homeController = require("../../controllers/admin/index");
const orderController = require("../../controllers/admin/order/ordercontroller");
const productController = require("../../controllers/admin/productcontroller");
const acountController = require("../../controllers/admin/acountcontroller");
const reporteController = require("../../controllers/admin/reporteController");
const router = express.Router();
const { uuid } = require("uuidv4");
var authadmin = function (req, res, next) {
  if (req.session.idadmin) {
    return next();
  } else {
    return res.redirect("http://localhost:5500/admin/login");
  }
};
router.get("/logout", (req, res) => {
  delete req.session.idadmin;
  res.redirect("http://localhost:5500/admin/login");
});
const pool = require("../../../database/pool");
//multer
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: "src/public/uploads", // <= si no existe, multer la creará
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    ext = ext.length > 1 ? ext : "." + mime.extension(file.mimetype);
    const fileName = uuid() + "_img" + ext;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });
//sistema de login
router.get("/login", authController().getLogin);
router.post("/login", authController().postLogin);
router.get("/getsession", async (req, res) => {
  let response = await pool.query("SELECT * FROM users where id=$1", [
    req.session.idadmin,
  ]);
  res.send({ admin: response.rows[0] });
});
//emple
router.post(
  "/registerempleado",
  authadmin,
  authController().postRegisterEmpleado
);
router.get("/user", authadmin, authController().getUser);
router.get("/users", authadmin, authController().getUsers);

/*controlador de pagina dne inicio*/
router.get("/dashboard", authadmin, homeController().index);

//orders
router.get("/orders", authadmin, orderController().getOrders);
router.get("/orders/:id", authadmin, orderController().getOrdersById);

//products

router.get("/product", authadmin, productController().getProducts);
router.get("/addproduct", authadmin, productController().addProduct);
router.post(
  "/addproduct",
  authadmin,
  upload.single("imagen"),
  productController().addPostProduct
);
router.get("/editproduct/:id", authadmin, productController().editProduct);
router.post("/editproduct/", authadmin, productController().editPostProduct);
//tucuenta
router.get("/editacount", authadmin, acountController().editGetAcount);
router.post("/editacount", authadmin, acountController().editPostAcount);
//reportes de ventas
router.get("/reportes", authadmin, reporteController().getReportes);
//router.get('/ventas',reporteController().getVentas);
module.exports = router;
