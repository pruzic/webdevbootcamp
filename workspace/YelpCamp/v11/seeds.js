var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
        {
            name: "Granit Hill",
            image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
            description: "Bacon ipsum dolor sit amet salami ham hock ham, hamburger corned beef short ribs kielbasa biltong t-bone drumstick tri-tip tail sirloin pork chop. Kielbasa turducken turkey cow shoulder pig prosciutto hamburger corned beef short loin, meatloaf tri-tip drumstick. Shankle sirloin ground round fatback, cow pancetta boudin t-bone pig. Ham short ribs cow tri-tip ribeye beef ribs boudin. Short ribs pork belly leberkas salami chuck, pork loin ball tip tenderloin turkey chicken pork chop filet mignon biltong."
        },
        {
            name: "Cloud's Rest",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWBgBtJC116_H8wEY_JReQ2ap_hlYbs1QfQExdxhpfLmTVjAThOw",
            description: "That is seventeen five - your half of the thirty-five thousand. Plus there's an extra fifteen in there, it's all yours, you've earned it. We made a deal. That's right. Because I think that we can do business together - we came to an understanding. Take a look at the money in your hand. Now just imagine making that every week. That's right. Two pounds a week, thirty-five thousand a pound!"
        },
        {
            name: "Desert Mesa",
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9bxMy3uo5747jG1j29T5KwDHJaoFuk3uzPZh0nd0WBEzVn51Acw",
            description: "Disrupt jean shorts viral hella meh, plaid cupidatat magna art party. Echo Park adipisicing literally narwhal. Williamsburg leggings church-key, craft beer forage cornhole jean shorts blue bottle pariatur. Officia sapiente bespoke, locavore plaid cray voluptate deep v ex vinyl tote bag chillwave swag occaecat. Sed banh mi 3 wolf moon single-origin coffee quis tempor. Hoodie pitchfork pork belly aliqua, shabby chic elit consequat freegan ethical try-hard mixtape. Schlitz banjo deep v ullamco blog, umami nulla sint elit skateboard Godard odio."
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
