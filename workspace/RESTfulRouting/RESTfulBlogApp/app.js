var bodyParser          = require("body-parser"),
    methodOverride      = require("method-override"),
    expressSanitizer    = require("express-sanitizer"),
    mongoose            = require("mongoose"),
    express             = require("express"),
    app                 = express();
    
    //APP CONFIG
    mongoose.connect("mongodb://localhost/restful_blog_app");
    app.set("view engine", "ejs");
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(expressSanitizer(""));
    app.use(methodOverride("_method"));
    
    
    // MONGOOSE/MODEL CONFIG
    var blogSchema = new mongoose.Schema({
        title: String,
        image: String,
        body: String,
        created: {type: Date, default: Date.now}
    })
    var Blog = mongoose.model("Blog", blogSchema);
    
    // ONE TIME CREATE A BLOG IN DB
    // Blog.create({
    //     title: "Test Blog",
    //     image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQL6jwEziP1elZBuKZ7m53LEIKTAfGF_Zb_SNH0DorE1M2X-ihl",
    //     body: "Hello this is a blog post!"
    // })
    
    //RESTFUL ROUTES
   
    app.get("/", function(req, res) {
        res.redirect("/blogs");
    })
     //INDEX ROUTE
    app.get("/blogs", function(req, res){
        Blog.find({}, function(err, allBlogs){
            if(err){
                console.log(err);
            }
            else
            {
                 res.render("index", {blogs: allBlogs});
            }
        })
    });
    
    //NEW ROUTE
    app.get("/blogs/new", function(req, res) {
        res.render("new");
    });
    
    //CREATE ROUTE
    app.post("/blogs", function(req, res) {
      //Sanitizer is used to check for any HTML tag and javascript 
      //input from user and make sure it is not harmful, by removing javascript from text. 
      req.body.blog.body = req.sanitize(req.body.blog.body);
      Blog.create(req.body.blog, function(err, newBlog){
          if(err){
               res.render("new")
          }
          else{
              //then, redirect to the index
             res.redirect("/blogs");
          }
      });
       
    });
    
    //SHOW ROUTE
    app.get("/blogs/:id", function(req, res) {
        Blog.findById(req.params.id, function(err, blog){
            if(err){
                res.redirect("/blogs")
            }
            else
            {
                res.render("show", {blog:blog});
            }
        });
        
        // res.send("SHOW PAGE!");
    });
    
    //EDIT ROUTE
    app.get("/blogs/:id/edit", function(req, res) {
        Blog.findById(req.params.id, function(err, foundBlog){
            if(err){
                res.redirect("/blogs");
            }
            else
            {
                res.render("edit", {blog: foundBlog});
            }
        });
       
    });
    
    //UPDATE ROUTE
    app.put("/blogs/:id", function(req, res){
        //Sanitizer is used to check for any HTML tag and javascript 
      //input from user and make sure it is not harmful, by removing javascript from text. 
      req.body.blog.body = req.sanitize(req.body.blog.body);
        Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
            if(err){
                res.redirect("/blogs");
            }
            else{
                res.redirect("/blogs/"+req.params.id);
            }
        });
    });
    
    //DELETE ROUTE
    app.delete("/blogs/:id", function(req, res){
        
      Blog.findByIdAndRemove(req.params.id, function(err){
          if(err){
               res.redirect("/blogs");
          }
          else{
              res.redirect("/blogs");
          }
      });
    });
    
    app.listen(process.env.PORT, process.env.IP, function() {
        console.log("Server Started!");
    })