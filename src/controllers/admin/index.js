function homeController() {
  return {
    index(req, res) {
      res.render("admin/index", { layout: 'layoutsAdmin' });
    },

  };
}
module.exports = homeController;
