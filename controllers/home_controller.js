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
Post.find({}).populate('user').exec(function(err , posts){
        return res.render('home' ,{
            title:"Codieal | Home ",
            posts: posts
        });
        });
}