//requiring our todo model

var db = require("../models/");


// routes for displaying and posting data

module.exports = function(app) {
	//create routes
	app.get("/", function(req, res) {
		res.redirect("/");
	});

	//display burgers from db to html
	app.get("/", function(req, res) {
		db.burger.findAll({}).then(function(data){
			console.log(data);
			var hbsObject = {
				burgers: data
			};
			console.log(hbsObject);
			res.render("index", hbsObject);
		});
	});

	// post for adding new burger
	app.post("/burgers/create", function(req, res) {
        db.Burger.create({
            burger_name: req.body.name
        }).then(function (results) {
            res.redirect("/");
        });
    });

    // devouring a burger updating from false to true
    app.put("/:id", function(req, res) {
    	db.burger.update({
    		devoured: true
    	},{
    		where: {
    			id: req.params.id
    		}
    	
    	}).then(function(results) {
    		res.redirect("/");
    	});
    });
};