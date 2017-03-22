var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
    
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human",
        goldfish: "...."
    }
    
     var animal = req.params.animal.toLowerCase();
     var sound = sounds[animal];
     var message = "";
     if(sound !== undefined){
         message = "The " + animal + " says '" + sound + "'";
     }
     else
     {
          message = "Sorry no animal you asked for!!!";
     }
    
    res.send(message);
});

app.get("/repeat/:q/:num", function(req, res){
    var params = req.params;
    var num = params.num;
    var msg = params.q;
    var msgToSend = "";
    
    for(var i = 0; i < parseInt(num); i++){
        
        msgToSend += msg + " ";
    }
    res.send(msgToSend.trim());
});

app.get("*", function(req, res) {
    
    res.send("Sorry, page not found... What are you doing with your life?");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});
    