function reporteController() {
  return {
    getReportes(req, res) {
      res.render("admin/misc_charts", { layout: "layoutsAdmin" });
    },
    getVentas(req, res) {
      res.render("admin/ventas", { layout: "layoutsAdmin" });
    },
  };
}

module.exports = reporteController;
