const pool = require("../../../database/pool");

function categoryController() {
  return {
    getCategory(req, res) {
      res.render("category/index", { layout: "layoutsFastfood" });
    },

    postCategory(req, res) {
      res.send("...");
    },
    async getPizza(req, res) {
      try {
        const response = await pool.query(
          "SELECT * FROM producto WHERE categoria='pizzas'"
        );
        res.render("category/pizzas", {
          layout: "layoutsFastfood",
          products: response.rows,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async getPollos(req, res) {
      try {
        const response = await pool.query(
          "SELECT * FROM producto WHERE categoria='pollos'"
        );
        res.render("category/pollos", {
          layout: "layoutsFastfood",
          products: response.rows,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async getHappyBox(req, res) {
      try {
        const response = await pool.query(
          "SELECT * FROM producto WHERE categoria='happybox'"
        );
    
        res.render("category/happybox", {
          layout: "layoutsFastfood",
          products: response.rows,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async getParrilladas(req, res) {
      try {
        const response = await pool.query(
          "SELECT * FROM producto WHERE categoria='parrilladas'"
        );
        res.render("category/parrilladas", {
          layout: "layoutsFastfood",
          products: response.rows,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async getMenus(req, res) {
      try {
        const response = await pool.query(
          "SELECT * FROM producto WHERE categoria='menus'"
        );
        res.render("category/menus", {
          layout: "layoutsFastfood",
          products: response.rows,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async getDeliciusPacks(req, res) {
      try {
        const response = await pool.query(
          "SELECT * FROM producto WHERE categoria='deliciuspack'"
        );
        res.render("category/deliciuspack", {
          layout: "layoutsFastfood",
          products: response.rows,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async getPremiunPacks(req, res) {
      try {
        const response = await pool.query(
          "SELECT * FROM producto WHERE categoria='premium'"
        );
        res.render("category/premiunpack", {
          layout: "layoutsFastfood",
          products: response.rows,
        });
      } catch (e) {
        console.log(e);
      }
    },

    //----------------------------------just product --------------------------------
    async getProductOne(req,res){
        console.log(req.params.id)
       try {
        const response = await pool.query(
          "SELECT * FROM producto WHERE id=$1",[req.params.id]);
        res.send({
          products: response.rows,
        });
      } catch (e) {
        console.log(e);
      }

    },
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
    },
    getDeliciusPacksOne(req, res) {
      res.render("section-product/just-product", { layout: "layoutsFastfood" });
    },
    getPremiunPacksOne(req, res) {
      res.render("section-product/just-product", { layout: "layoutsFastfood" });
    },
  };
}

module.exports = categoryController;
