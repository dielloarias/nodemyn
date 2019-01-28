module.exports = function(app) {
  var HomeController = {
    index: function(req, res) {
      res.render("index", { title: "Teste - Express!" });
    },

    login: function(req, res) {
      res.send("teste");
    },

    logout: function(req, res){

    }
  };
  return HomeController;
};
