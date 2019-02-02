module.exports = function(app) {
  var HomeController = {
    index: function(req, res) {
      res.render("index");
    },

    login: function(req, res) {

      try {

        var body = req.body;
        var usuario = {
          host: body.host,
          port: body.port,
          user: body.username,
          password: body.password,
          database: body.database,
        };

        var connection = app.dbc.ConnectionFactory(usuario);
        var transacao = new app.transacoes.Transacao(connection);

        const sql = "SHOW DATABASES;";
        const callback = function(err, result, fields) {
          if (err) {
            res.render("error", {
              error: err
            });
            connection.end();
            return;
          }
          req.session.usuario = usuario;

          connection.end();
          res.render("main", {
            databases: result,
            metadataDb: fields
          });
        };

        transacao.transacao(sql, callback);

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