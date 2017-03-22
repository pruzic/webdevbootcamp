var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middlware = require("../middleware");

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
router.post("/",middlware.isLoggedIn,function(req, res) {
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
router.get("/new",middlware.isLoggedIn ,function(req, res) {
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

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit",middlware.checkCampgroundOwnership ,function(req, res) {
   Campground.findById(req.params.id, function(err, foundCampground){
      res.render("campgrounds/edit", {campground: foundCampground});
    });
});

//UPDATE CAMPGROUND ROUTE
router.put("/:id",middlware.checkCampgroundOwnership , function(req, res){
    //find and update correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, 
     function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        }else{
             //redirect to show page
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
   
});

//REMOVE CAMPGROUND ROUTE
router.delete("/:id",middlware.checkCampgroundOwnership, function(req, res){
   Campground.findByIdAndRemove(req.params.id, function(err){
      if(err) {
          res.redirect("/campgrounds");
      }else{
          res.redirect("/campgrounds");
      }
   });
});

module.exports = router;