// const Menu = require("../../models/menu");

function projectsController() {
    return {
     index(req, res) {
        
        res.render('projects');
    //  res.send('Projects page');
      },
    };
  }
  
  module.exports = projectsController;