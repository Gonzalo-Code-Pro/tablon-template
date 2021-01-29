function homeController() {
  return {
    index(req, res) {
      res.render("home", { layout: "layoutsFastfood" });
    },
    
  };
}
module.exports = homeController;
