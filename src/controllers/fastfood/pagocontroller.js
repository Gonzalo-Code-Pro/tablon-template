function pagoController() {
  return {
    getPago(req, res) {
      res.render("section-pago/pago", { layout: "layoutsFastfood" });
    },
    postPago(req,res){
        
        res.send('...')
    },
  };
}
module.exports = pagoController;
