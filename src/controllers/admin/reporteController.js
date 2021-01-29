
let pool = require('../../../database/pool') 
function reporteController() {
  return {
    async getReportes(req, res) {
      let es = {
        pen : 'pendiente',
        pro : 'procesando',
        com : 'completo',
        pre : 'preparando',
        rec : 'recibido'
      }
        let res1 =  await pool.query('SELECT * FROM pedidos WHERE estado=$1',[es.pen])
        let res2 =  await pool.query('SELECT * FROM pedidos WHERE estado=$1',[es.pro])
        let res3 =   await pool.query('SELECT * FROM pedidos WHERE estado=$1',[es.com])
        let res4 =   await pool.query('SELECT * FROM pedidos WHERE estado=$1',[es.pre])
        let res5 =   await pool.query('SELECT * FROM pedidos WHERE estado=$1',[es.rec])

        
          //*count users 
      let res7 =   await pool.query("SELECT * FROM users WHERE tipouser='customer'")
      let countUser = res7.rowCount;

        let res6 = await pool.query('SELECT * FROM pedidos')
        

        
        let p_pen = res1.rowCount;
        let p_pro = res2.rowCount;
        let p_com = res3.rowCount;
        let p_pre = res4.rowCount;
        let p_rec = res5.rowCount;
        let estados = [ p_pen,p_pro,p_com,p_pre,p_rec,countUser];
          console.log(estados)
      res.render("admin/misc_charts", { layout: "layoutsAdmin",pedidos:res6.rows,estados : estados});
    },
    getVentas(req, res) {
      res.render("admin/ventas", { layout: "layoutsAdmin" });
    },
  };
}

module.exports = reporteController;
