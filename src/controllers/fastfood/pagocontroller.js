

function pagoController() {
  return {
    getPago(req, res) {
      res.render("section-pedido/pedido", { layout: "layoutsFastfood" });
    },
    postPago(req,res){
        res.send('...')
    },
  };
}
module.exports = pagoController;
