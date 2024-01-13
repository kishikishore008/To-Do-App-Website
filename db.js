const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://kishikishore:E81I0sTfCF5bHvXw@cluster0.gtawy1t.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo = mongoose.model('todo',todoSchema);

module.exports={
    todo
}