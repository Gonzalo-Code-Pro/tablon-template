function categoryController() {
  return {
    getCategory(req, res) {
      res.render("category/index", { layout: "layoutsFastfood" });
    },

    postCategory(req, res) {

        res.send('...')
    },
    getPizza(req, res) {
      res.render("category/pizzas", { layout: "layoutsFastfood" });
    },
    getPollos(req, res) {
      res.render("category/pollos", { layout: "layoutsFastfood" });
    },
    getHappyBox(req, res) {
      res.render("category/happybox", { layout: "layoutsFastfood" });
    },
    getParrilladas(req, res) {
      res.render("category/parrilladas", { layout: "layoutsFastfood" });
    },
    getMenus(req, res) {
      res.render("category/menus", { layout: "layoutsFastfood" });
    },getDeliciusPacks(req, res) {
      res.render("category/deliciuspack", { layout: "layoutsFastfood" });
    },
    getPremiunPacks(req, res) {
      res.render("category/premiunpack", { layout: "layoutsFastfood" });
    },

//----------------------------------just product --------------------------------
    getPizzaOne(req, res) {
      res.render("section-product/just-product", { layout: "layoutsFastfood" });
    },
    getPollosOne(req, res) {
      res.render("section-product/just-product", { layout: "layoutsFastfood" });
    },
    getHappyBoxOne(req, res) {
      res.render("section-product/just-product", { layout: "layoutsFastfood" });
    },
    getParrilladasOne(req, res) {
      res.render("section-product/just-product", { layout: "layoutsFastfood" });
    },
    getMenusOne(req, res) {
      res.render("section-product/just-product", { layout: "layoutsFastfood" });
    },getDeliciusPacksOne(req, res) {
      res.render("section-product/just-product", { layout: "layoutsFastfood" });
    },
    getPremiunPacksOne(req, res) {
      res.render("section-product/just-product", { layout: "layoutsFastfood" });
    },
  };
}


module.exports = categoryController;
