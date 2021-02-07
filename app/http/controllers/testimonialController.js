// const Menu = require("../../models/menu");

function testimonialController() {
    return {
     index(req, res) {
        
        res.render('testimonial');
    //  res.send('testimonial page');
      },
    };
  }
  
  module.exports = testimonialController;