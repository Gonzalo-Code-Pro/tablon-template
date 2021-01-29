const moment = require("moment");
const { uuid } = require("uuidv4");
const pool = require("../../../../database/pool");

function orderController() {
  return {
    async getOrders(req, res) {
      try {
        const response = await pool.query("SELECT * FROM pedidos ");
        res.render("admin/orders", {
          layout: "layoutsAdmin",
          pedidos: response.rows,
          moment: moment,
        });
      } catch (e) {
        console.log(e);
      }
    },
    postOrders(req, res) {
      res.send("confimamos ordeners");
    },
    async getOrdersById(req, res) {
      let response = await pool.query(
        `SELECT * FROM pedidos 
                            INNER JOIN detallepedido ON detallepedido.idpedido = pedidos.id
                            WHERE pedidos.id=$1`,
        [req.params.id]
      );

      let response2 = await pool.query(
        `select * from detallepedido INNER JOIN producto ON producto.id = detallepedido.idproducto 
				where idpedido =$1`,
        [req.params.id]
      );     
      res.render("admin/just-order", {
        layout: "layoutsAdmin",
        pedido: response.rows[0],
        productos :response2.rows,
        moment: moment,
      });
    },
  };
}
module.exports = orderController;
