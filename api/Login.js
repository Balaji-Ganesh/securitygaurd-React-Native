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
   
     const securePassword = await bcrypt.hash(req.body.password, 10);
    const login = new Details({
         Name : req.body.name,
         Password : securePassword,
    })

    const result = await login.save();
    res.json({
        Status:"Data Added to the DB!!",
        value:result,
        
    })
})
module.exports = router;



