module.exports = function(app) {
  var HomeController = {
    index: function(req, res) {
      res.render("index");
    },

    login: function(req, res) {
      console.log(req.body);

      try {

        let body = req.body;
        let usuario = {
          hostAddress: body.hostAddress,
          port: body.port,
          username: body.username,
          password: body.password,
          database: body.database,
        };
  
        req.session.usuario = usuario;

        console.log(req.session.usuario);
        
        // validar se conexão ocorre com sucesso.

      } catch (error) {
        console.log(error);
      }

      res.send("<h1>Login</h1>");

    },

    logout: function(req, res) {

      req.session.destroy();
      res.redirect("/");

    }
  };
  return HomeController;
};