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
   const filter = { Name: req.body.teachername };
   const update = { Password: req.body.newpassword };
   let doc = await Details.findOneAndUpdate(filter, update, {
     new: true,
   });
   console.log(doc);


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
