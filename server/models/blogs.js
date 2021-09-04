const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogsSchema = new Schema({
    title:String,
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false 
    }
});
const Blog = mongoose.model('Blog', blogsSchema);
module.exports = Blog;