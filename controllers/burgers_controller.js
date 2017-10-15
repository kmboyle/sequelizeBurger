var express = require('express');
var db = require('../models');

// Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();

router.get("/", function(req, res) {
    //getting the burgers table, and including the customer table to display through handlebars 
    db.Burger.findAll({
        include: [db.Customer],
        order: [
            ['burger_name']
        ]
    }).then(function(data) {
        //creating an object to hold each object from the database
        var burgerObj = {
            burgerArray: data
        };
        //passing the object to the handlebars template
        res.render("index", burgerObj);
    });

});
router.post("/", function(req, res) {

    //creating the burger
    db.Burger.create({
        burger_name: req.body.newBurger,
        devoured: req.body.devoured
    }).then(function(data) {
        res.redirect('/');
    }).catch(function(err) {
        res.redirect('/');
    });
});

router.put("/:id", function(req, res) {
    //creating the customer and updating the burger state devoured to true
    db.Customer.create({
        name: req.body.newCustomer,
        BurgerId: req.params.id
    });
    db.Burger.update({
        devoured: req.body.devoured,
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.redirect('/');
        //this catch does not seem to handle the error of an empty customer name field
    }).catch(function(err) {
        res.direct('/');
    });
});
router.delete("/:id", function(req, res) {

    //deleting the burger from the database
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.redirect('/');
    });
});

module.exports = router;