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

            Value:0, //student already present

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
              Value:1, // new Student
            //   data: result,
            });

     }


})
module.exports = app;


