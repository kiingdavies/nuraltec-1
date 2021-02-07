// const Menu = require("../../models/menu");

function homeContorller() {
  return {
   index(req, res) {
      
      res.render('home');
  //  res.send('Home page');
    },
  };
}

module.exports = homeContorller;