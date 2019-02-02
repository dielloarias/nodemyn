module.exports = function(app) {

    var main = app.controllers.main;
    app.post("/sql", main.sql);

}