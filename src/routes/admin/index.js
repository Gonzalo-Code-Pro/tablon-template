const authController = require("../../controllers/admin/auth/authcontroller");
const express = require("express");
const homeController = require("../../controllers/admin/index");
const orderController = require("../../controllers/admin/order/ordercontroller");
const productController = require("../../controllers/admin/productcontroller");
const acountController = require("../../controllers/admin/acountcontroller");
const reporteController = require("../../controllers/admin/reporteController");
const router = express.Router();
const { uuid } = require('uuidv4');
//multer
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination: 'src/public/uploads', // <= si no existe, multer la creará
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname);
        ext = ext.length > 1 ? ext : '.' + mime.extension(file.mimetype);
       const fileName = uuid()+ '_img' + ext; 
        cb(null, fileName);
    }
});
const upload = multer({storage : storage});
//sistema de login
router.get("/login", authController().getLogin);
router.post("/login", authController().postLogin);
router.get("/register", authController().getRegister);
router.post("/register", authController().postRegister);
/*controlador de pagina dne inicio*/
router.get("/dashboard", homeController().index);

//orders
router.get("/orders", orderController().getOrders);

//products

router.get("/product", productController().getProducts);
router.get("/addproduct", productController().addProduct);
router.post(
  "/addproduct",
  upload.single("imagenproduct"),
  productController().addPostProduct
);
router.get("/editproduct/:id", productController().editProduct);
router.post("/editproduct/:id", productController().editPostProduct);
//tucuenta
router.get("/youacount", acountController().getAcount);
router.get("/edityouacount", acountController().editAcount);
//reportes de ventas
router.get("/reportes", reporteController().getReportes);

module.exports = router;
