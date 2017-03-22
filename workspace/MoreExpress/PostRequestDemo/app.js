var express = require("express");
var bodyParser = require("body-parser");

var app = express();
 var friends = ["Tony", "Predrag", "Nikola", "David", "Neso"];
 
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

//=======App Routes===============

app.get("/", function(req, res){
   res.render("home");
});

app.post("/addfriend", function(req, res){
    
    friends.push(req.body.newfriend);
    res.redirect("friends");
//   res.render("addfriend"); 
});

app.get("/friends", function(req, res){
   res.render("friends", {friends: friends}) ;
});


//===========Server Start and Listening==============

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started!!!") ;
});