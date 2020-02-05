
var path = require("path");

module.exports = function(app) {

  //GET requests - user is directed to survey page when they visit this endpoint.

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  //Home page. 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  

  //Set home page as default. 
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};

