const Details = require("../models/Login");
const express = require("express");

const router = express.Router();

router.get("/Login1", (req, res) => {
  res.json({
    name: "shiv",
  });
});

router.post("/Login1", async (req, res) => {
  const Findteacher = await Details.find({ Name: req.body.teachername });

  if(Findteacher.length > 0)
  {
    const oldpassword = req.body.oldpassword;
    const newpassword = req.body.newpassword;

     console.log(Findteacher);


  }
  else 
  {
    res.json({
      Value:0,
      Status:"Invalid Teacher!!"
    })
  }
  

  
 
});
module.exports = router;
