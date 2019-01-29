var mysql = require("mysql");

function createConnection(params) {
    return mysql.createConnection({
        host: params.host,
        port: params.port,
        user: params.user,
        password: params.password,
        database: params.database
    });
}

module.exports = function() {
    return createConnection;
}