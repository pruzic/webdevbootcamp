var express     = require("express"), 
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    app         = express();
    
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Granit Hill",
//     image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
//     description: "This is a huge granit hill, no bothrooms. No water. Beautiful granite!"
// }, function(err, newCamp){
//   if(err){
//       console.log(err);
//   }
//   else{
//       console.log("NEW CAMP ADDED:");
//       console.log(newCamp);
//   }
    
// });

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
            res.render("index", {
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
    res.render("new.ejs");
});

//2. SHOW ROUTE --SHOWS MORE INFO ABOUT ONE CAMPGROUND
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    var id = req.params.id;
    Campground.findById(id, function(err, foundCamp){
        if(err){
            console.log(err)
        }
        else{
            //render show template with that campground
            res.render("show", {campground: foundCamp});
        }
    });
   
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
});
