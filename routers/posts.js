const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts_controller');

router.post('/create' , postController.create);
console.log("Router is loaded");
module.exports = router;