module.exports.home = function(req , res){
    console.log(req.cookies);
    // return res.send("Hello");
    return res.render('home' ,{
        title:"Home Page"
    });
}