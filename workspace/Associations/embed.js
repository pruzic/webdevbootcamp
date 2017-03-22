var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo");

//POST
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

//USER
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "r_stana@hotmail.com",
//     name: "Stana Ruzic"
// });

// newUser.posts.push(
//         {
//             title: "Stana Post 1",
//             content: "This is my first post"
//         },
//         {
//             title: "Stana Post 2",
//             content: "This is my second post"
//         });

// newUser.save(function(err, user){
//   if(err) {
//       console.log(err);
//   }else{
//       console.log(user);
//   }
// });

// var newPost = new Post({
//   title: "My New Post",
//   content: "This is my best yet post"
// });

// newPost.save(function(err, post){
//     if(err) {
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

User.findOne({name: "Stana Ruzic"}, function(err, user){
   if(err) {
       console.log(err);
   }else{
      user.posts.push({
          title: "3 things I really love",
          content: "Nature, God, Kids"
      });
      
      user.save(function(err, user){
         if(err) {
             console.log(err)
         }
         else{
             console.log(user);
         }
      });
   }
});