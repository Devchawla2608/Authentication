const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    content: {
    type:String,
    require:true
},
user: {
 type:mongoose.Schema.Types.ObjectId,
 ref:'User'
},
// Include the array of ids of all comments in this post scehma itself
comments: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'comment'
    // I have to take care of this is different from sir and i know that this is right so lecture 13 
   },

},
{
    timestamps:true
});
const Post = mongoose.model('Post' ,postSchema);
module.exports = Post;