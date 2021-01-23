const { uuid } = require("uuidv4");
const pool = require("../../../database/pool");
const path = require("path");
const fs = require("fs");
const { argv0 } = require("process");

function productController() {
  return {
    addProduct(req, res) {
      res.render("admin/product_add", { layout: "layoutsAdmin" });
    },
    async addPostProduct(req, res) {
      console.log(req.file);
      console.log(req.body);
      let _id = uuid();
      let categoria = req.body.categoria ? req.body.categoria : "";
      let nombreoficial = req.body.nombreoficial ? req.body.nombreoficial : "";
      let nombrecomercial = req.body.nombrecomercial
        ? req.body.nombrecomercial
        : "";
      let preciooriginal = req.body.preciooriginal
        ? req.body.preciooriginal
        : "";
      let preciodescuento = req.body.preciodescuento
        ? req.body.preciodescuento
        : "";
      let demorapreparacion = req.body.demorapreparacion
        ? req.body.demorapreparacion
        : "";
      let descripccion = req.body.descripccion ? req.body.descripccion : "";
      let cantidaddisponible = req.body.cantidaddisponible
        ? parseInt(req.body.cantidaddisponible)
        : 0;
      let medida = req.body.medida ? req.body.medida : "";
      let tipoorder = req.body.tipoorder ? req.body.tipoorder : "";
      let tipo = req.body.tipo ? req.body.tipo : "";
      let createdat = new Date();
      let imagen = req.file.filename;
      let precioriginalParse = parseFloat(preciooriginal);
      let preciodescuentoParse = parseFloat(preciodescuento);
      let values = [
        _id,
        categoria,
        nombreoficial,
        nombrecomercial,
        precioriginalParse,
        preciodescuentoParse,
        demorapreparacion,
        descripccion,
        cantidaddisponible,
        medida,
        tipoorder,
        tipo,
        createdat,
        imagen,
      ];
      console.log(values);

      try {
        const text = `
        INSERT INTO
        producto(  
        id,
        categoria,
        nombreoficial,
        nombrecomercial,
        preciooriginal,
        preciodescuento,
        demorapreparacion,
        descripccion,
        cantidaddisponible,
        medida,
        tipoorder,
        tipo,
        createdat,
        imagen
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`;
        const response = await pool.query(text, values);
        //agregar sus extras
        let extras = req.body.extras;
        let idproducto = _id;
        extras.forEach(async function (item) {
          let values2 = [uuid(), item, idproducto];
          await pool.query(
            `INSERT INTO extras(idextra,nombreextra,producto_id)
                      VALUES ($1,$2,$3)
          `,
            values2
          );
        });
        //await pool.query(text2, values2);
      } catch (e) {
        console.log(e);
      }
      res.redirect("/admin/product");
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
          "SELECT * FROM producto WHERE id1 = $1 ORDER BY createdat DESC",
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
