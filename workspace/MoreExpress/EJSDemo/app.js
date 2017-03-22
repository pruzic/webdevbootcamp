var express = require("express");
var app = express();

//letting express app to look into public folder for files
app.use(express.static("public"));


//letting express app to know that render 
//method's param have ejs extension
//for example instead home.ejs we write just home.
app.set("view engine", "ejs");

//routes
app.get("/",  function(req, res){
    
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
   var thing = req.params.thing;
   res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
   var posts = [{title: "Post 1", author: "Predrag"},
                {title: "My adorable pet cat", author: "Stana"},
                {title: "Can you belive this spooky", author: "Nikola"}]; 
                
    res.render("posts", {posts:  posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!");
});