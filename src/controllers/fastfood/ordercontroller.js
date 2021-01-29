const moment = require("moment");
const { uuid } = require("uuidv4");
const pool = require("../../../database/pool");

function orderController() {
  return {
    getOrders(req, res) {
      res.render("section-pedido/pedido", { layout: "layoutsFastfood" });
    },
    async getOrderOne(req, res) {
      try {
        let response = await pool.query("SELECT * FROM pedidos WHERE id=$1", [
          req.params.id,
        ]);
        console.log(response.rows);
        res.render("section-pedido/just-pedido", {
          layout: "layoutsFastfood",
          order: response.rows[0],
        });
      } catch (e) {
        console.log(e);
      }
    },
    async getOrdersTable(req, res) {
      try {
        const response = await pool.query(
          "SELECT * FROM pedidos where users_id =$1",
          [req.session.iduser]
        );
        console.log(response.rows);
        res.render("section-pedido/allorders", {
          layout: "layoutsFastfood",
          pedidos: response.rows,
          moment: moment,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async postOrders(req, res) {
      await pool.query(
        "UPDATE users SET nombre =$1,apellido=$2,telefono=$3,email=$4,direccion1=$5,direccion2=$6,provincia=$7,compañia=$8,ciudad=$9 WHERE id=$10",
        [
          req.body.nombre,
          req.body.apellido,
          req.body.telefono,
          req.body.email,
          req.body.direccion1,
          req.body.direccion2,
          req.body.provincia,
          req.body.compania,
          req.body.ciudad,
          req.session.iduser,
        ]
      );

      //console.log(req.body);
      let cantidadproductos = 0;
      for (let i = 0; i < req.body.quantityArray.length; i++) {
        cantidadproductos++;
      }
      cantidadproductos = String(cantidadproductos);
      // INSERTANDO EN TABLA DE PEDIDO
      const idpedido = req.body.pediddoIdGenerado;
      const users_id = req.session.iduser;
      const estado = "recibido";
      const direcciondefinitiva = req.body.direccion1;
      const tipoPago = req.body.tipoPago;
      const descuentoTotal = req.body.descuentoTotal;
      const nombre = req.body.nombre;
      const apellido = req.body.apellido;
      const codigopostal = req.body.codigopostal;
      const comentario = req.body.comentario;
      const fechacreado = new Date();
      const fechactualizacion = fechacreado;
      const preciototal = req.body.totalPrecio;
      const provinciaentrega = req.body.provincia;
      const ciudadentrega = req.body.ciudad;

      const values = [
        idpedido,
        estado,
        tipoPago,
        fechacreado,
        fechactualizacion,
        descuentoTotal,
        nombre,
        apellido,
        preciototal,
        codigopostal,
        cantidadproductos,
        provinciaentrega,
        ciudadentrega,
        direcciondefinitiva,
        comentario,
        users_id,
        req.body.telefono,
      ];
      console.log(values);
      try {
        await pool.query(
          `INSERT INTO pedidos(id,estado,tipoPago,fechacreado,
      fechactualizacion,descuentototal,
      nombre,apellido,
      preciototal,codpostal,cantidadproductos
      ,provinciaentrega,ciudadentrega,direcciondefinitiva
      ,comentarios,users_id,telefono)
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`,
          values
        );
        //INSERTANDO  EN TABLA "DETALLE PEDIDO"
        for (let i = 0; i < req.body.quantityArray.length; i++) {
          let values2 = [
            uuid(),
            req.body.productsOrders[i],
            req.body.quantityArray[i],
            req.body.priceTotalOneArray[i],
            idpedido,
          ];
          let consulta = await pool.query(
            `INSERT INTO detallepedido(id_,idproducto,cantidadpedidos,preciototal,idpedido)
                                        VALUES ($1,$2,$3,$4,$5)`,
            values2
          );
        }
        res.response("recibido");
      } catch (e) {
        console.log(e);
      }
    },
  };
}
module.exports = orderController;
