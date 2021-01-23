function authController() {
  return {
    getLogin(req, res) {
      res.render("admin/auth_login", { layout: false });
    },
    postLogin(req, res) {
      console.log(req.body);
      res.send("Aqui se reciben los datos del login");
    },
    getRegister(req, res) {
      res.render("admin/auth_register", { layout: false });
    },
    postRegister(req, res) {
      res.send("Aqui se reciben los nuevos usuarios");
    },
    getUser(req,res){
      res.render("admin/user",{layout:'layoutsAdmin'})
    },
    getUsers(req,res){
      res.render("admin/usuariosregistrados",{layout:'layoutsAdmin'})
    }
  };
}
module.exports = authController;
