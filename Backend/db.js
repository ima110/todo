const mongoose = require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect("mongodb://localhost:27017/todos");
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed:{
        type:Boolean,
        default:false
    }
});

const todo = mongoose.model("todo",todoSchema);

module.exports ={
    todo
}