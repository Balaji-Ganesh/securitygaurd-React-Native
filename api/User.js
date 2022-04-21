const { Router } = require('express');
const express = require('express');
const app = express();
const User = require('./../models/User');

const router = express.Router();

const users = new User({
  name: '19BD1A0508',
})
users.save();


// //getting student data
router.post("/Search", (req, res) => {

  // console.log(req.body.name);

  //     // seraching the data of the student in database
  User.find({ name: req.body.data },(error,result)=>{

    if(error)
    {
        res.json({
                      Value:0,
                      status: "FAILED TO FIND STUDENT",
                      message: "An error occured!!"
                  })
    }

     else {
      

      res.json({

        status: "Success",
        Value:1,



      })
    }
  })
      });
  module.exports = router;