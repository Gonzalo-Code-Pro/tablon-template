function homeController() {
  return {
    index(req, res) {
      res.render("home", { layout: "layoutsFastfood" });
    },
    postLogin(req, res) {
      res.send("...");
    },
    postRegister(req, res) {
      res.send("...");
    },
  };
}
module.exports = homeController;
