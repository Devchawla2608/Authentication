const passport = require('passport');
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments_controller');

router.post('/create' ,   commentController.create);
// passport.checkAuthentication,
console.log("Router is loaded");
module.exports = router;