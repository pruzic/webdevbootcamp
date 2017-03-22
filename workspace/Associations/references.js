var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");

User.create({
    email: "rdavid@hotmail.com",
    name: "David Ruzic"
});

Post.create({
    title: "David Cook 1",
    content: "David like to eat but not to cook"
}, function(err, post){
  if(err) {
      console.log(err);
  }
  else{
      User.findOne({email:"rdavid@hotmail.com"}, function(err, foundUser){
          if(err){
              console.log(err);
          }
          else{
              foundUser.posts.push(post);
              foundUser.save(function(err, data){
                  if(err){
                      console.log(err);
                  }
                  else{
                      console.log(data);
                  }
              })
          }
      });
  }
});

// Find User
// Find all posts for that user
User.findOne({email:"rdavid@hotmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});