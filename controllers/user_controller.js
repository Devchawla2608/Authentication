const User = require('../models/user');
module.exports.signUp = function(req , res){
    return res.render('user-sign-up' ,{
        title:"Sign Up Page"
    });
}
module.exports.signIn = function(req , res){
    return res.render('user-sign-in' ,{
        title:"Sign In Page"
    });
}
 // find mai bracess aate hai but is mai nahi 
module.exports.profile = function(req , res){
    return res.render('profile' , {
        title:"Profile page"
    })
}


    

module.exports.create = function(req , res){
    console.log(req.body);
    
    User.findOne({email:req.body.email},function(err , user){
        if(err){
            console.log("There is an error ",err);
        return res.redirect('back');
        }
        if(user){
            return res.redirect('back');
        }
        if(req.body.password != req.body.confirmPassword){
            console.log("Invaild Password or username");
            return res.redirect('back') ;
            }

            User.create({
                email:req.body.email,
                password:req.body.password,
                confirmPassword:req.body.confirmPassword,
                name:req.body.name
            } , function(err , newUser){
                if(err){
                    console.log("There is an error ",err);
                    return;
                }
                console.log("I am New User",newUser);
                return res.redirect('/users/sign-in');
             });
    })
 
}

// module.exports.createSession = function(req , res){
//     User.findOne({email:req.body.email},function(err , user){
//         if(err){
//            console.log("Error is found" ,err);
//            return;
//         }
//     if(!user){
//     console.log("Account is not there",err);
//     return res.redirect('/users/sign-up');
//     }

//         if(user.password != req.body.password){
//         console.log("Invaild Password or username");
//         return res.redirect('back');
//         }
//         res.cookie('user_id' , user.id);
//         return res.redirect('/users/profile');
// })
// }



// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/users/profile');
}

module.exports.destroySession = function(req, res){
    req.logout();

    return res.redirect('/');
}