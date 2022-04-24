const Details = require('./../models/Login');
const express = require('express');
const cors = require('cors');
const router = express.Router();

router.use(cors());

router.get("/Login",(req,res)=>{

    res.json({
        name:"shiv",
    })
})




router.post("/Login",async(req,res)=>{
   
    
    const login = new Details({
         Name : req.body.name,
         Password : req.body.password,
    })

    const result = await login.save();
    res.json({
        Status:"Data Added to the DB!!",
        value:result.name,
        
    })
})
module.exports = router;



