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
      RollNumber : req.body.RollNumber,
    //   Time:req.body.Time,
      Type:req.body.Type,
    })

    users.save();

})
module.exports = app;


