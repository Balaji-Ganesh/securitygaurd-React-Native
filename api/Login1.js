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
    const newpassword = req.body.newpassword;
   const k = await Findteacher.updateOne({ $set: { Password: newpassword } });
   console.log(k);
   k.save();



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
