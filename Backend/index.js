const express = require("express");
const { createschema, updateSchema } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");

app.use(cors({
    origin : "http://localhost:5173"
}))

app.use(express.json());

app.post("/todo",async (req,res)=>{
     const createPayload = req.body;
     const parsePayload = createschema.safeParse(createPayload);
     if(!parsePayload.success){
       return res.status(411).json({msg:"You sent wrong input"})
     }
    await todo.create({
        title:createPayload.title,
        description : createPayload.description,
        completed : false
    });
    res.status(200).json({
        msg: "Todo created"
    });
});

app.get("/todo",async (req,res)=>{

    const todoGet = await todo.find({});
    res.json({
        todoGet
    });
});

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parseUpdate = updateSchema.safeParse(updatePayload);
    if(!parseUpdate){
        return res.status(411).json({msg:"You sent wrong input"})
    }

    await todo.updateMany({
        _id : req.body.id
    },{
        completed:true
    });
    res.json({
        msg:"Todo marked as completed"
    });
});

app.listen((3000),()=>{
    console.log("server listening on port 3000")
});