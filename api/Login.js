const Details = require('./../models/Login');
const express = require('express');
const { rawListeners } = require('./Push');
const User = require('../models/User');

const router = express.Router();

router.get("/Login",(req,res)=>{

    res.json({
        name:"shiv",
    })
})




router.post("/Login",(req,res)=>{
   
    Details.find({Name : req.body.name})
    .then( (user) => {
        return res.status(400).send("User already exists");
    })
    .then( ()=>{

        const login = new Details({
            Name : req.body.name,
            Password : req.body.password,
       })
   
       login.save();

    })
    .then(result => {
        return res.status(200).send(result);
      })
    .catch(error => {
        console.log("Error Adding new User", error);
        res.status(500).send("Error");
      });
})
module.exports = router;



