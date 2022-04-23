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
         Password : req.body.password,
    })

    login.save();
    res.json({
        Status:"Data Added to the DB!!",
        data:req.body.password,
        
    })
})
module.exports = router;



