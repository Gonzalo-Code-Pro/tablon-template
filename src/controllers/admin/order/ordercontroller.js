function orderController() {
  return {
    getOrders(req, res) {
      res.render("admin/orders", {
        layout: "layoutsAdmin",
      })
    },
    postOrders(req,res){
        res.send('confimamos ordeners')
    }
  };
}
module.exports = orderController;
