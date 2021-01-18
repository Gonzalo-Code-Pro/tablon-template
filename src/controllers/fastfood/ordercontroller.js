function orderController() {
  return {
    getOrders(req, res) {
      res.render("section-pedido/pedido", { layout: "layoutsFastfood" });
    },
    getOrderOne(req,res){ 
      res.render("section/just-pedido", { layout: "layoutsFastfood" });
    },
    postOrders(req,res){
        res.send('...')
    }
  };
}
module.exports = orderController;
