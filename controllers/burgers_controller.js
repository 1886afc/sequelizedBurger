//requiring our todo model

var db = require("../models");


// routes for displaying and posting data
module.exports = function(app) {
    app.get("/burgers", function(req, res) {
        db.Burger.findAll({})
            .then(function(dbBurger) {
                res.json(dbBurger);
        });
    });

};