const express = require('express');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
    type:"string",
    required:true,
    unique:true
    },
    password:{
        type:"string",
        required:true, 
    },
    confirmPassword:{
        type:"string",
        required:true, 
    },
    name:{
        type:"string",
        required:true,
    }
})
const User = mongoose.model('User' ,   userSchema);
console.log("schema is loaded")
module.exports  = User








// const mongoose = require('mongoose');
// const signUpSchema = new mongoose.Schema({
//     email: {
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//         type:String,
//         required:true 
//     },
//     confirm_password:{
//         type:String,
//         required:true 
//     },
//     name:{
//         type:String,
//         required:true 
//     }
// })
// console.log("schema is loaded")
// // When ever we are naming of collection we use capital 
// const User = mongoose.model('User' ,  signUpSchema);
// console.log("schema is loaded")
// module.exports  = User