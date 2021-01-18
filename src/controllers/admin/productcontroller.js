const { uuid } = require("uuidv4");
const pool = require("../../../database/pool");
const path = require("path");
const fs = require("fs");

function productController() {
  return {
    addProduct(req, res) {
      res.render("admin/product_add", { layout: "layoutsAdmin" });
    },
    async addPostProduct(req, res) {
      console.log(req.file);
      let img = req.file.filename;
      let nombreoficial = req.body.nombreoficial;
      let nombrecomercial = req.body.nombrecomercial;
      let preciounitario = parseFloat(req.body.nombreoficial);
      let categoria_id = 2;
      const values = [
        uuid(),
        nombreoficial,
        nombrecomercial,
        preciounitario,
        img,
        categoria_id,
      ];
      try {
        const text = `INSERT INTO
                        producto(id1,nombreoficial,nombrecomercial,preciounitario,img,categoria_id) 
                        VALUES ($1,$2,$3,$4,$5,$6)`;
        const response = await pool.query(text, values);
      } catch (e) {
        console.log(e);
      }
      res.send("Producto agregado");
    },
    async getProducts(req, res) {
      try {
        const response = await pool.query("SELECT * FROM producto");
        console.log(response.rows);
        res.render("admin/productslist", {
          layout: "layoutsAdmin",
          products: response.rows,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async editProduct(req, res) {
      let id = req.params.id;
      try {
        const response = await pool.query(
          "SELECT * FROM producto WHERE id1 = $1",
          [id]
        );

        res.render("admin/edit_product", {
          layout: "layoutSingle",
          product: response.rows[0],
        });
        console.log(response.rows[0]);
      } catch (e) {
        console.log(e);
      }
    },
    editPostProduct(req, res) {},
  };
}

module.exports = productController;
