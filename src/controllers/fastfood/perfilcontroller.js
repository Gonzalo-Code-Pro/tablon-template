function perfilController() {
  return {
    getPerfil(req, res) {
      res.render("section-user/section-user", { layout: "layoutsFastfood" });
    },
    updatePerfil(req,res){
        
        res.send('...')
    },
  };
}
module.exports = perfilController;
