var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

//INDEX ROUTE - SHOW ALL CAMPGROUND
router.get("/", function(req, res) {
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index", {
                campgrounds: allCampgrounds
            });
        }
    })
    
});

//CREATE ROUTE - ADD NEW CAMPGROUND TO DB
router.post("/",isLoggedIn,function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampgrounds = {
        name: name,
        image: image,
        description: description,
        author: author
    };
    //Create a new campground and save to DB
    Campground.create(newCampgrounds, function(err, newCamp){
        if(err){
            console.log(err);
        }
        else
        {
             //Redirect back to get campgrounds page.
              res.redirect("/campgrounds");
        }
    });
});

//1. NEW ROUTE - SHOW FORM TO CREATE A NEW CAMPGROUND
router.get("/new",isLoggedIn ,function(req, res) {
    res.render("campgrounds/new");
});

//2. SHOW ROUTE --SHOWS MORE INFO ABOUT ONE CAMPGROUND
router.get("/:id", function(req, res) {
    //find the campground with provided ID
    var id = req.params.id;
    Campground.findById(id).populate("comments").exec(function(err, foundCamp){
        if(err){
            console.log(err)
        }
        else{
            
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCamp});
        }
    });
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;