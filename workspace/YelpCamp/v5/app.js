var express     = require("express"), 
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    app         = express(),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    seedDB      = require("./seeds");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp_v5");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

//RESTFUL ROUTES THERE ARE 7 OF THEM

app.get("/", function(req, res) {
    res.render("landing");
});

//INDEX ROUTE - SHOW ALL CAMPGROUND
app.get("/campgrounds", function(req, res) {
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
app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;

    var newCampgrounds = {
        name: name,
        image: image,
        description: description
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
app.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new");
});

//2. SHOW ROUTE --SHOWS MORE INFO ABOUT ONE CAMPGROUND
app.get("/campgrounds/:id", function(req, res) {
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

//======================================================
//COMMENTS ROUTES
//======================================================
app.get("/campgrounds/:id/comments/new", function(req, res) {
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }
        else
        {
            res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res){
    //lookup campground using ID
   Campground.findById(req.params.id, function(err, campground){
       
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       }
       else{
            //create new comment
            Comment.create(req.body.comment, function(err, comment){
               if(err) {
                   console.log(err);
                   res.redirect("/campgrounds")
               }
               else{
                   campground.comments.push(comment);
                   campground.save();
                   res.redirect("/campgrounds/" + campground._id);
               }
            });
        }
   });
    
   
    
    //connect new comment to campground
    //redirect campground show page
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
});
