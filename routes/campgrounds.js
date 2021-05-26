var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//INDEX- show all campgrounds
router.get("/",function(req,res){
    //GET all the campground from DB
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index",{campgrounds:allCampgrounds});
        }
    })   
    // res.render("campgrounds",{campgrounds:campgrounds});
});

//CREATE - add new campground to DB
router.post("/",middleware.isLoggedIn,function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var price = req.body.price;
    var descp = req.body.desc;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name,price: price, image: image, description: descp, author: author}
    // campgrounds.push(newCampground)
    //create a new campground and save it to db
    Campground.create(newCampground,function(err,newlyCampground){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds
            res.redirect("/campgrounds");
        }
    });
});

router.get("/new",middleware.isLoggedIn,function(req,res){
    res.render("campgrounds/new.ejs");
});

router.get("/:id",function(req,res){
    //find the campground with provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show",{campground: foundCampground})
        }
    });
});

//Edit campground route
router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req,res){
    //is user logged in?
        //does user own the campground?
        //otherwise, redirect
    //if not, redirect?
    Campground.findById(req.params.id, function(err,foundCampground){
        
        res.render("campgrounds/edit",{campground: foundCampground});
    });
});
//Update campground route

router.put("/:id",middleware.checkCampgroundOwnership,function(req,res){
    //find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id,req.body.campground, function(err,updateCampground){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
    //redirect somewhere(show page)
});

// destroy Campground Route

router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds");
        }
    });
});

//middleware




module.exports = router;