const { Router } = require('express');
const express = require('express');
const app = express();
const User = require('./../models/User');

const router = express.Router();


//signin
router.post('/signin',(req,res)=>{

})

//signup
router.post('signup',(req,res)=>{

    let {name,email,password} = req.body;

    const users = new User({
        name,
        email,
        password,
    })

    users.save();


})
module.exports = router;