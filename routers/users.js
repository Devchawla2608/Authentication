const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/sign-up' , userController.signUp);
router.get('/sign-in' , userController.signIn);
router.post('/create' , userController.create);
router.get('/profile' ,passport.checkAuthentication, userController.profile);

router.post('/createSession', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), userController.createSession);


router.get('/sign-out', userController.destroySession);

console.log("Router is loaded");
module.exports = router;
