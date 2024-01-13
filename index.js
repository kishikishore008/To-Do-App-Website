const express = require('express');
const { createTodo, updateTodo }=require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());


app.post('/todos', async (req, res) => {
    const createPayload=req.body;
    const parasedPayload=createTodo.safeParse(createPayload);
    if(!parasedPayload.success){
        res.status(411).json({
            msg:"You sent the worng inputs",
        })
        return;
    }
   await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
   })
   res.status(200).json({
    msg:"todo created successfully!"
   })
  
});


app.get('/todos',async (req,res)=>{
const todos=await todo.find({});

// console.log(todos)
res.status(200).json({todos})

});


app.put('/completed',async (req,res)=>{
    const updatePayload=req.body;
    const parasedPayload=updatePayload.safeparse(updatePayload);
    if(!parasedPayload.success){
        res.status(411).json({
            msg:"you sent the worng inputs",
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })

})









app.listen(3000);
