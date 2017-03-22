var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    console.log("SOMEONE HAS SEND REQUEST TO DOG!!!");
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
    //console.log(req.params);
    var subreddit = req.params.subredditName;
    
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO COMMENTS PAGE!");
});


app.get("*", function(req, res){
    console.log("SOMEONE HAS SEND REQUEST TO DOG!!!");
    res.send("Your are a star!");
});


//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});