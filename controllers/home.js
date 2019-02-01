module.exports = function(app) {
  var HomeController = {
    index: function(req, res) {
      res.render("index");
    },

    login: function(req, res) {

      try {

        let body = req.body;
        let usuario = {
          host: body.host,
          port: body.port,
          user: body.username,
          password: body.password,
          database: body.database,
        };
  
        var connection = app.dbc.ConnectionFactory(usuario);

        connection.query("SHOW DATABASES;", function(err, result, fields){
            if (err) {
              res.render("error", err);
              return;
            }

            req.session.usuario = usuario;
            // console.log(result);
            
            // res.send("<h1>Login</h1><p> " + JSON.stringify(result) + "</p>");
            res.render("main", { result: result, fields: fields });
        });
        

        

      } catch (error) {
        console.log(error);
      }


    },

    logout: function(req, res) {

      req.session.destroy();
      res.redirect("/");

    }
  };
  return HomeController;
};