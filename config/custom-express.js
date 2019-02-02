var express = require("express");
var consign = require("consign");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");

function configuraViews(app) {
  let viewsPath = path.join(__dirname, "../views");
  app.set("views", viewsPath);
  app.set("view engine", "ejs");
  app.use(express.static(path.join(__dirname, "../public")));
}

function configuraBodyParser(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}

function configuraSession(app) {
  var sessionOptions = {
    secret: "nodemynprog",
    resave: false,
    saveUninitialized: true
  };

  app.use(session(sessionOptions));
}

function configuraConsign(app) {
  var options = {
    locale: "pt-br",
    verbose: false
  };
  consign(options)
    .include("dbc")
    .then("transacoes")
    .then("controllers")
    .then("routes")
    .into(app);
}

module.exports = function() {
  app = express();

  configuraViews(app);

  configuraBodyParser(app);

  configuraSession(app);

  configuraConsign(app);

  return app;
};
