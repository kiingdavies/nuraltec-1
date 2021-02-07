const homeController = require("../app/http/controllers/homeController");
const aboutController = require("../app/http/controllers/aboutController");
const projectsController = require("../app/http/controllers/projectsController");
const contactController = require("../app/http/controllers/contactController");
const testimonialController = require("../app/http/controllers/testimonialController");

function initRoutes(app) {
    // Get Home Page would render the index function in homeController
    app.get("/", homeController().index);
  
    // Get About us Page
    app.get("/about", aboutController().index);
  
    // Get projects Page
    app.get("/projects", projectsController().index);

    // Get testimonial Page
    app.get("/testimonial", testimonialController().index);
  
    // Get Contact Page
    app.get("/contact", contactController().index);
    
  }
  
  module.exports = initRoutes;