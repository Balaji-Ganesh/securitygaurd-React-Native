const Details = require('./../models/Login');
const express = require('express');
const bcrypt = require("bcrypt");

const router = express.Router();



router.get("/Login",(req,res)=>{

    res.json({
        name:"shiv",
    })
})




router.post("/Login",async(req,res)=>{

   const data = await Details.find({Name:req.body.name});
   console.log(data);
//    const hashpassword = data[0].Password;
//    const userpassword = req.body.password;

//     const resu = await bcrypt.compare(userpassword, hashpassword);

    if(data.length > 1)
    {
       res.json({
         Value: 1,
         Status:"Details exist!",
       }); 

    }
    else{
        res.json({
            Value:0,
            Status:"Teacher not exist!!",
        })
    }


   
    // const securePassword = await bcrypt.hash(req.body.password, 10);
    // const login = new Details({
    //      Name : req.body.name,
    //      Password : securePassword,
    // })

    // const result = await login.save();
    // res.json({
    //     Status:"Data Added to the DB!!",
    //     value:result,
        
    // })
})
module.exports = router;



