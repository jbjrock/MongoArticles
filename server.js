var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan");
var exphbs = require("express-handlebars");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/MongoScraper";

//Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

//Instantiate our Express App
var app = express();

//Set up an Express Router
var router = express.Router();

//Designate our public folder as a static directory
app.use(express.static("public"));
app.use(express.static('models'));
//Configuring Middleware
//Use Morgan logger for logging
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Have every request go through our router middleware
app.use(router);


// Connect mongoose to our database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }); {
    console.log("Mongoose is running!")
}
  
//Listen on the port
app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});

module.exports = app;
