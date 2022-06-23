const Post = require('../models/post');
module.exports.home = function(req , res){
    // console.log(req.cookies);
    // // return res.send("Hello");

    // Only id  
// Post.find({} , function(err , posts){
//     return res.render('home' ,{
//         title:"Codieal | Home ",
//         posts: posts
//     });
// });

// Name also 
// This populate function complete fill all users data in user  we want to print name of person also 
Post.find({}).populate('user').exec(function(err , posts){
    console.log("I am DOne")
        return res.render('home' ,{
            title:"Codieal | Home ",
            posts: posts
        });
        });
}