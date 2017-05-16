//requiring our todo model

var db = require("../models");


// // routes for displaying and posting data

// module.exports = function(app) {
// 	//create routes
// 	app.get("/", function(req, res) {
// 		res.redirect("/index");
// 	});

// 	//display burgers from db to html
// 	app.get("/", function(req, res) {
// 		db.burger.findAll({}).then(function(data){
// 			console.log(data);
// 			var hbsObject = {
// 				burgers: data
// 			};
// 			console.log(hbsObject);
// 			res.render("index", hbsObject);
// 		});
// 	});

// 	// post for adding new burger
// 	app.post("/index", function(req, res) {
//         db.Burger.create({
//             burger_name: req.body.name
//         }).then(function (results) {
//             res.redirect("/index");
//         });
//     });

//     // devouring a burger updating from false to true
//     app.put("/:id", function(req, res) {
//     	db.burger.update({
//     		devoured: true
//     	},{
//     		where: {
//     			id: req.params.id
//     		}
    	
//     	}).then(function(results) {
//     		res.redirect("/index");
//     	});
//     });
// };


var db = require("../models");

module.exports = function(app) {

    // Create routes
    app.get('/', function(req, res) {
        res.redirect('/index');
    });

    // Render page with all objects from burgers table in burgers_db
    app.get("/index", function(req, res) {
        db.Burger.findAll({}).then(function(data) {
            console.log(data);
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    // Post route to /index when adding new burger
    app.post('/index', function(req, res) {
        db.Burger.create({
            burger_name: req.body.name
        }).then(function (results) {
            res.redirect('/index');
        });
    });


    // Put route to /index/:id when updating burger to devoured=true
    app.put("/:id", function(req, res) {
        // console.log(JSON.stringify(req.body));
        console.log("id to update: ", req.params.id);

        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.redirect("/index");
        });

    });



};