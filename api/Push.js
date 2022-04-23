const User = require('../models/User');
const express = require('express');
const app = express();

app.get("/Push",(req,res)=>{
    res.json({

        name:'Shinjkkjb',
    })
})

app.post("/Push",(req,res)=>{

    const users = new User({
      RollNumber : req.body.name,
    //   Time:req.body.Time,
      Type:req.body.value,
    })

    users.save();

})
module.exports = app;


