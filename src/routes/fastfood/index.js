const pool = require("../../../database/pool");
const express = require("express");
const orderController = require("../../controllers/fastfood/ordercontroller");
const categoryController = require("../../controllers/fastfood/categorycontroller");
const pagoController = require("../../controllers/fastfood/pagocontroller");
const perfilController = require("../../controllers/fastfood/perfilcontroller");
const router = express.Router();
const homeController = require("../../controllers/fastfood/index");
const authController = require("../../controllers/fastfood/login");
const { uuid } = require("uuidv4");
// home
var auth = function (req, res, next) {
  if (req.session.iduser) {
    return next();
  } else {
    return res.redirect("http://localhost:5500/fastfood/login");
  }
};

router.get("/detroy", (req, res) => {
  delete req.session.iduser;
  res.redirect("http://localhost:5500/fastfood/login");
});
router.get("/session", async (req, res) => {
  let idsessionUser = req.session.iduser;
  let response = await pool.query("SELECT * FROM users WHERE id=$1", [
    idsessionUser,
  ]);
  res.send({ userSession: response.rows[0] });
});
router.get("/", homeController().index);
//login_register
router.get("/login", authController().getLoginRegister);
router.post("/login", authController().Login);
router.post("/register", authController().Register);
router.get("/user", auth, authController().getUser);
router.post("/updateuser", auth, authController().updateUser);
//orders
router.get("/ordersfull", auth, orderController().getOrdersTable);
router.get("/orders", auth, orderController().getOrders);
router.get("/orders/:id", auth, orderController().getOrderOne);
router.post("/orders", auth, orderController().postOrders);
router.post("/editorder", auth, async (req, res) => {
  try {
    await pool.query("UPDATE pedidos SET estado=$1  where id=$2", [
      req.body.estado_,
      req.body.idpedido,
    ]);
  } catch (e) {
    console.log(e);
  }
  res.send("Estado actualizado");
});
//pago
router.get("/checkout", auth, pagoController().getPago);
router.post("/checkout", auth, pagoController().postPago);
//almcenar en sesiones el carrito de pedido
router.get("/cart/:id", auth, async (req, res) => {
  const idproducto = req.params.id;
  try {
    const response = await pool.query(
      "INSERT INTO  cart(id,users_id,producto_id,quantity) values($1,$2,$3,$4)",
      [uuid(), req.session.iduser, idproducto, 1]
    );
    res.send("agregado");
  } catch (e) {
    console.log(e);
  }
});
router.get("/delete/:id", auth, async (req, res) => {
  const idcart = req.params.id;
  try {
    const response = await pool.query("DELETE FROM cart WHERE id=$1", [idcart]);
    res.send({
      response: "eliminado",
    });
  } catch (e) {
    console.log(e);
  }

  res.send("elimindo");
});

router.post("/vacearcarrito", auth, async (req, res) => {
  await pool.query("DELETE FROM cart where users_id=$1", [req.session.iduser]);
  res.send("Carrito vaceado");
});

router.post("/update", async (req, res) => {
  console.log(req.body);
  try {
    const response = await pool.query(
      "UPDATE cart SET quantity=$1  WHERE id=$2",
      [req.body.quantity, req.body.idcart]
    );
    res.send({
      response: "precio actualizado",
    });
  } catch (e) {
    console.log(e);
  }
});
router.get("/cartlist", async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT * FROM producto INNER JOIN cart ON cart.producto_id = producto.id where cart.users_id=$1",
      [req.session.iduser]
    );
    res.send({
      productcart: response.rows,
    });
  } catch (e) {
    console.log(e);
  }
});
//perfil de usuario

router.get("/perfil", auth, perfilController().getPerfil);
router.get("/perfil/update", auth, perfilController().updatePerfil);

//just product single for category-----------------------------------------------------
//router.get("/category/product/:id",categoryController().getProductOne)
//pizzas
router.get("/category/pizzas/:id", categoryController().getPizzaOne);
//pollos a la braza
router.get("/category/pollos/:id", categoryController().getPollosOne);
//hoapy box
router.get("/category/happybox/:id", categoryController().getHappyBoxOne);
//parrilladas
router.get("/category/parrilladas/:id", categoryController().getParrilladasOne);
//delicius pack
router.get(
  "/category/deliciuspacks/:id",
  categoryController().getDeliciusPacksOne
);
//menus criollos
router.get("/category/happyboxs/:id", categoryController().getMenus);
//premiun packs
router.get(
  "/category/premiumpacks/:id",
  categoryController().getPremiunPacksOne
);

router.get("/category/menus/:id", categoryController().getMenusOne);

//categorias----------------------------------------------------------------------------
router.get("/category", categoryController().getCategory);
router.get("/category", categoryController().postCategory);
//--------------------------------------------------------------------------------------
//pizzas
router.get("/category/pizzas", categoryController().getPizza);
//pollos a la braza
router.get("/category/pollos", categoryController().getPollos);
//hoapy box
router.get("/category/happybox", categoryController().getHappyBox);
//parrilladas
router.get("/category/parrilladas", categoryController().getParrilladas);
//delicius pack
router.get("/category/deliciuspacks", categoryController().getDeliciusPacks);
//menus criollos
router.get("/category/menus", categoryController().getMenus);
//premiun packs
router.get("/category/premiumpacks", categoryController().getPremiunPacks);

module.exports = router;
