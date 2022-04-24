
const express = require('express');


// const app = express();
const User = require('./../models/User');

const router = express.Router();


// const users = new User({
//   RollNumber : '19BD1A0508',
//   // Type:true,
// })
// users.save();




// //getting student data
router.post("/Search", async(req, res) => {

  // console.log(req.body.name);

  //     // seraching the data of the student in database
  const result = await User.find({ name: req.body.data });

  if(result.length > 0)
  {

    res.json({
      status: "Success",
      Value:1,
    })

  }
  else
  {

    res.json({
      Value:0,
      status: "FAILED TO FIND STUDENT",
      message: "An error occured!!"
  })

  }

    

      });
  module.exports = router;