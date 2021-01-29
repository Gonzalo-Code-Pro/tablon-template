const pool = require("../../../database/pool");

function acountController() {
  return {
    async editGetAcount(req, res) {
      let response = await pool.query("SELECT * FROM users   where id =$1", [
        req.session.idadmin,
      ]);
      res.render("admin/edityouacount", {
        layout: "layoutsAdmin",
        admin: response.rows[0],
      });
    },
    async editPostAcount(req, res) {
      await pool.query('UPDATE users SET email =$1,nombre=$2,apellido=$3,telefono=$4,compañia=$5,direccion1=$6 where id=$7',
      [req.body.email,req.body.nombre,req.body.apellido,req.body.telefono,req.body.compania,req.body.direccion1,
        req.session.idadmin])
      res.redirect('http://localhost:5500/admin/editacount')
    },
  };
}

module.exports = acountController;
