const { uuid } = require("uuidv4");
const pool = require("../../../database/pool");
function authController() {
  return {
    getLoginRegister(req, res) {
      res.render("section-user/login_register.ejs", { layout: false });
    },

    async Register(req, res) {
      const id = uuid();
      const tipouser = "customer";

      const fechacreado = new Date();
      await pool.query(
        "INSERT INTO users(id,email,nombre,password,tipouser,fechacreado) values($1,$2,$3,$4,$5,$6)",
        [
          id,
          req.body.email,
          req.body.nombre,
          req.body.password,
          tipouser,
          fechacreado,
        ]
      );
      req.session.iduser = id;
      res.redirect("http://localhost:5500/fastfood/");
      res.send("...");
    },
    async Login(req, res) {
      const emaillogin = req.body.email;
      const passwordlogin = req.body.password;
      //verificando
      let mensaje = "";
      let color = "";
      let res1 = await pool.query(
        "SELECT * FROM users where email=$1 and password=$2",
        [emaillogin, passwordlogin]
      );
      if (res1.rowCount == 1) {
        req.session.iduser = res1.rows[0].id;
        res.redirect("http://localhost:5500/fastfood/category/pollos");
      } else {
        res.redirect("http://localhost:5500/fastfood/login");
      }
    },
    async getUser(req, res) {
      let response = await pool.query("SELECT * FROM users WHERE id=$1", [
        req.session.iduser,
      ]);
      res.render("section-user/user.ejs", {
        layout: "layoutsFastfood",
        user: response.rows[0],
      });
    },
    updateUser(req, res) {
      console.log(req.body);
      res.send("acualizado");
    },
    async updateUser(req, res) {
      let values = [
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
      ];
      await pool.query(
        `UPDATE users SET nombre =$1,apellido=$2,telefono=$3,email=$4,direccion1=$5,direccion2=$6,provincia=$7,compañia=$8,ciudad=$9 WHERE id=$10`,
        values
      );
      res.redirect("http://localhost:5500/fastfood/user");
    },
  };
}
module.exports = authController;
