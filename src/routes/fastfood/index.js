const express = require("express");
const orderController = require('../../controllers/fastfood/ordercontroller')
const categoryController = require('../../controllers/fastfood/categorycontroller')
const pagoController = require('../../controllers/fastfood/pagocontroller')
const perfilController = require('../../controllers/fastfood/perfilcontroller')
const router = express.Router();
const homeController = require("../../controllers/fastfood/index")
//sistema de login y home
router.get("/", homeController().index)
router.post('/login',homeController().postLogin)
router.post('/register',homeController().postRegister)
//orders 

router.get("/orders",orderController().getOrders)
router.get("/orders/:_id", orderController().getOrderOne)
router.post("/orders", orderController().postOrders)
//pago
router.get("/pago", pagoController().getPago)
router.post("/pago", pagoController().postPago)
//perfil de usuario

router.get("/perfil", perfilController().getPerfil)
router.get("/perfil/update", perfilController().updatePerfil)
//just product single for category-----------------------------------------------------
//pizzas
router.get("/category/pizzas/:id", categoryController().getPizzaOne)
//pollos a la braza
router.get("/category/pollos/:id",categoryController().getPollosOne)
//hoapy box
router.get("/category/happybox/:id", categoryController().getHappyBoxOne)
//parrilladas
router.get("/category/parrilladas/:id", categoryController().getParrilladasOne)
//delicius pack
router.get("/category/deliciuspacks/:id", categoryController().getDeliciusPacksOne)
//menus criollos
router.get("/category/happyboxs/:id", categoryController().getMenus)
//premiun packs
router.get("/category/premiumpacks/:id", categoryController().getPremiunPacksOne)

router.get("/category/menus/:id", categoryController().getMenusOne)

//categorias----------------------------------------------------------------------------
router.get("/category", categoryController().getCategory)
router.get("/category", categoryController().postCategory)
//--------------------------------------------------------------------------------------
//pizzas
router.get("/category/pizzas", categoryController().getPizza)
//pollos a la braza
router.get("/category/pollos",categoryController().getPollos)
//hoapy box
router.get("/category/happybox", categoryController().getHappyBox)
//parrilladas
router.get("/category/parrilladas", categoryController().getParrilladas)
//delicius pack
router.get("/category/deliciuspacks", categoryController().getDeliciusPacks)
//menus criollos
router.get("/category/menus", categoryController().getMenus)
//premiun packs
router.get("/category/premiumpacks", categoryController().getPremiunPacks)

module.exports = router;
