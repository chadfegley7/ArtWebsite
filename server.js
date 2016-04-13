var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

require("./server/config/mongoose.js");

app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var Order = mongoose.model("Order");

var routes_setter = require("./server/config/routes.js");
routes_setter(app);

app.listen(8000, function(){
  console.log("Listening on port 8000")
});
