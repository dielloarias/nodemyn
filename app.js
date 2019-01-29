var express = require("express");
var consign = require("consign");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");


var app = express();

var viewsPath = path.join(__dirname, "views");
app.set("views", viewsPath);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var sessionOptions = {
  secret: 'nodemynprog',
  resave: false,
  saveUninitialized: true
};

app.use(session(sessionOptions));

var options = {
  locale: "pt-br",
  // verbose: false
}
consign(options)
  .include("dbc")
  // .then("models")
  .then("controllers")
  .then("routes")
  .into(app);

  
let port = 3000;
app.listen(port, function() {
  console.log("Servidor ativo na porta: " + port);
});
