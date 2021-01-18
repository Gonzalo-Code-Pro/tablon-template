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
  };
}
module.exports = authController;
