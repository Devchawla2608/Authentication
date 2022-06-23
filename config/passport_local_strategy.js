const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// Authentication using passport 

passport.use( new LocalStrategy({
    usernameField:'email'
},
    function(email , password , done){
    User.findOne({email:email} , function(err , user){
        if(err){
            console.log("Error in finding user");
            return done(err);
        }
        if(!user || user.password!=password){
            console.log("Invaild Username /Password");
            return done(null , false);
        }return done(null , user);
    })
    }));
    // serializeUser -> set userid in cookie which user is logged in 
    passport.serializeUser(function(user , done){
        done(null , user.id);
    });
// deserializeUser -> if request comes from browser the uncode this id 
    passport.deserializeUser(function(id ,done){
        User.findById(id , function(err , user){
            if(err){
                console.log("Error in finding user");
                return done(err);
            }
            return done(null , user);
        
        })
    })

    passport.checkAuthentication = function(req , res , next){
        // If the user is signed in then pass on the request to the next function controller's action 
        if(req.isAuthenticated()){
            return next();
        }
        // if the user is not signed in 
        return res.redirect('/users/sign-in');
    }

    // Set the user for the views  if it called we can use user in views
    passport.setAuthenticatedUser = function(req ,res , next){
        if(req.isAuthenticated()){
            // req.user contains the current signed in user from the session cookie and we are just send for the local vies 
            console.log(req.user);
            res.locals.user = req.user;
        }
        next();
    }
    module.exports = passport;