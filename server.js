//Require express and path.
var path = require('path');
var express = require("express");

//Set up variable to represent express.
var app = express();

//Set PORT.
var PORT = process.env.PORT || 8080;

//Use express.json and urlencoded.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Require routes.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Start server listening at port. 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
