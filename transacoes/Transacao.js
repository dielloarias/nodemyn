function Transacao(connection) {
    this._connection = connection;
}

Transacao.prototype.transacao = function(sql, callback) {
    this._connection.query(sql, callback);
};

module.exports = function() {
    return Transacao;
};