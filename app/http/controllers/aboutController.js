// const Menu = require("../../models/menu");

function aboutController() {
    return {
     index(req, res) {
        
        res.render('about');
    //  res.send('About page');
      },
    };
  }
  
  module.exports = aboutController;