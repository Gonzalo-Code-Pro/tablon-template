function authController() {
  return {
    getLoginRegister(req, res) {
      res.render("section-user/login_register.ejs", { layout: false });
    },
    postLoginRegister(req, res) {
      res.send("...");
    },
  };
}
module.exports = authController;
