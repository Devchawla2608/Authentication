const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/sign-up' , userController.signUp);
router.get('/sign-in' , userController.signIn);
router.post('/create' , userController.create);
router.get('/profile' , userController.profile);

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);


router.get('/sign-out', usersController.destroySession);

console.log("Router is loaded");
module.exports = router;
