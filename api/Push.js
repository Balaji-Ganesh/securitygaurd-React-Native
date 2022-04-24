const User = require('../models/User');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/Push",(req,res)=>{
    res.json({

        name:'Shinjkkjb',
    })
})

app.post("/Push",(req,res)=>{

    const users = new User({
      RollNumber : req.body.name,
      Time:req.body.date,
      Type:req.body.value,
      Name:req.body.teacherName
    })

   const result = await  users.save();

    res.json({
        status:"Roll Number push successfully!!",
        data:result,
    })

})
module.exports = app;


