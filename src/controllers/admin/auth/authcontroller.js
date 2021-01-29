const moment = require("moment");
const pool = require("../../../../database/pool");
const { uuid } = require("uuidv4");
function authController() {
  return {
    getLogin(req, res) {
      res.render("admin/auth_login", { layout: false });
    },
    async postLogin(req, res) {

      const code = 'admin_gr6565';
      const email = req.body.email;
      const password = req.body.password;
      const password_register = password + code;
      console.log(password_register)
       let res1 = await pool.query(
        "SELECT * FROM users where email=$1 and password=$2 and (tipouser='admin' or tipouser ='gerente')",
         [email, password_register]
      );
      if (res1.rowCount == 1) {
        req.session.idadmin = res1.rows[0].id 
        res.redirect("http://localhost:5500/admin/dashboard");
      } else {
        res.redirect("http://localhost:5500/admin/login");
      }

    },

    getRegisterEmpleado(req, res) {
      res.render('admin/empleados',{layout:'layoutsAdmin'})
    },
   async postRegisterEmpleado(req, res) {
      let id=uuid()
      let  nombre =req.body.nombre;
      let apellido =req.body.apellido;
      let  direccion1 =req.body.direccion1;
      let  telefono =req.body.telefono;
      let  email =req.body.email;
      let  puesto=req.body.puesto;
      let tipouser = 'empleado';
      let fechacreado = new Date()
     let estado = 'activo';
      let values = [id,nombre,apellido,direccion1,telefono,email,puesto,tipouser,fechacreado,estado];
       await pool.query(`INSERT INTO users(id,nombre,apellido,direccion1,telefono,email,puesto,tipouser,fechacreado,estado)
                      values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,values);
    res.redirect('http://localhost:5500/admin/users');
    },


    getUser(req, res) {
      res.render("", { layout: "layoutsAdmin" });
    },

    async getUsers(req, res) {
      try {
        const tipouser = "customer";
        const empleado = "empleado";
        let response = await pool.query(
          "SELECT * FROM users"
        );
        res.render("admin/listusers", {
          layout: "layoutsAdmin",
          users: response.rows,
          moment: moment,
        });
      } catch (e) {
        console.log(e);
      }
    },
  };
}
module.exports = authController;
