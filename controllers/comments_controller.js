const Post = require('../models/post'); 
const User = require('../models/user');
const Comment = require('../models/comment');
const mongoose = require('mongoose');


module.exports.create = function(req , res){
    console.log("I am Comment Controller")
    console.log(req.body);
    console.log(req.body.content);
    console.log(req.body.post);
    console.log(typeof(req.body.post));

    // req.body.post = JSON.stringify(req.body.post);
    // const x  =  new mongoose.Types.ObjectId(req.body.post);
    // console.log(x);
    // console.log(mongoose.Types.ObjectId.isValid(req.body.post));





    Post.findById(JSON.stringify(req.body.post), function(err , post){
        if(err){
            console.log("There is an error");
            console.log(err);
            return
        }
        else{
            Comment.create({
                content:req.body.content,
                user:req.user._id,
                post : req.body.post
            },
            function(err , comment){
                if(err){
                    console.log('error  in creating a comment');
                    return;
                }
                // Here we are updating  
                post.comments.push(comment);
                post.save();
                return res.redirect('back');
            })
        }
    })
}