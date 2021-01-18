function reporteController() {
  return {
    getReportes(req, res) {
      res.render("admin/reportes", { layout: "layoutsAdmin" });
    },
  };
}

module.exports = reporteController;
