var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

var campGround = [{
    name: "Salmon Creek",
    image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"
}, {
    name: "Granit Hill",
    image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"
}, {
    name: "Mountain Goat's Rest",
    image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"
},
{
    name: "Salmon Creek",
    image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"
}, {
    name: "Granit Hill",
    image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"
}, {
    name: "Mountain Goat's Rest",
    image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"
}];

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {
        campgrounds: campGround
    });
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;

    var newCampgrounds = {
        name: name,
        image: image
    };
    campGround.push(newCampgrounds);

    //Redirect back to get campgrounds page.
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
});
