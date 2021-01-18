function acountController(){
      return {
          getAcount(req,res){
              res.render('admin/youacount',{layout : 'layoutsAdmin'})  
          },
          editAcount(req,res){ 
              res.render('admin/edityouacount',{layout : 'layoutsAdmin'})  
          }
      }
}

module.exports = acountController
