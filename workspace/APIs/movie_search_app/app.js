var express = require("express");
var app = express();


var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res){
    var movie = req.query.movieToSearch;
    var url = "http://omdbapi.com/?s=" + movie;
    request(url, function(error, response, body){
     if(!error && response.statusCode === 200) {
      var parsedData = JSON.parse(body);
      res.render("results", {data: parsedData});
      }
      else{
          console.log("SOMETHING WENT WRONG!");
      }
        
    });

});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Moves App started!!");
})