const Details = require('./../models/Login');
const express = require('express');
const { rawListeners } = require('./Push');

const router = express.Router();

router.get("/Login",(req,res)=>{

    res.json({
        name:"shiv",
    })
})




router.post("/Login",(req,res)=>{
   
    
    const login = new Details({
         Name : req.body.name,
         Passowrd : req.body.passowrd,
    })

    login.save();
    res.json({
        Status:"Data Added to the DB!!",
        data:Name,
    })
})
module.exports = router;



