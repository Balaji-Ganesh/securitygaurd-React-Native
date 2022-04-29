const User = require('../models/User');
const express = require('express');

const app = express();



app.get("/Push",(req,res)=>{
    res.json({

        name:'Shinjkkjb',
    })
})

app.post("/Push",async(req,res)=>{

    const findingDetails = await User.find({ RollNumber: req.body.name });

    if(findingDetails.length > 0)
    {
        res.json({

            value:0,

        })

    }

     else{

            const users = new User({
              RollNumber: req.body.name,
              Time: req.body.date,
              Type: req.body.value,
              Name: req.body.teacherName,
            });

            const result = await users.save();

            res.json({
              status: "Roll Number push successfully!!",
              value:1,
            //   data: result,
            });

     }


})
module.exports = app;


