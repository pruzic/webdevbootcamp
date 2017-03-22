var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
        {
            name: "Granit Hill",
            image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
            description: "This is a huge granit hill, no bothrooms. No water. Beautiful granite!"
        },
        {
            name: "Cloud's Rest",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWBgBtJC116_H8wEY_JReQ2ap_hlYbs1QfQExdxhpfLmTVjAThOw",
            description: "This is a huge granit hill, no bothrooms. No water. Beautiful granite!"
        },
        {
            name: "Desert Mesa",
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9bxMy3uo5747jG1j29T5KwDHJaoFuk3uzPZh0nd0WBEzVn51Acw",
            description: "This is a huge granit hill, no bothrooms. No water. Beautiful granite!"
        }
    ];
    
function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }else
        {
            console.log("Removed campgrounds!");
            
            //Add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                  if(err){
                      console.log(err);
                  }
                  else
                  {
                      console.log("NEW CAMP ADDED:");
                    // console.log(newCamp);
                    Comment.create({
                        text: "This place is teribble, I have worst time ever",
                        author: "Predrag"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        }
                        else{
                             campground.comments.push(comment);
                             campground.save();
                            // console.log("Created new comment");
                        }
                    });
                  }
                
                });
            });
        }
    });
}

module.exports = seedDB;
