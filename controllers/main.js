module.exports = function(app) {

    var MainController = {

        sql: function(req, res) {

            var body = req.body;
            var usuario = req.session.usuario;
            var sql = body.campoSQL;

            console.log(usuario);

            var connection = app.dbc.ConnectionFactory(usuario);
            var transacoes = new app.transacoes.Transacao(connection);

            transacoes.transacao(sql, function(err, result, fields) {

                if (err) {
                    res.render(err, {
                        error: err
                    });
                    connection.end();
                    return;
                }

                res.render("main", {
                    queryResult: result,
                    queryFields: fields
                });
                connection.end();

            });
        }

    };


    return MainController;
}