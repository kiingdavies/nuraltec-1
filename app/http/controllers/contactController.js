// const Menu = require("../../models/menu");

function contactController() {
    return {
     index(req, res) {
        
        res.render('contact');
    //  res.send('Contact page');
      },
    };
  }
  
  module.exports = contactController;