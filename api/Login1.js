const Details = require("../models/Login");
const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

router.get("/Login1", (req, res) => {
  res.json({
    name: "shiv",
  });
});

router.post("/Login1", async (req, res) => {
   const filter = { Name: req.body.teachername };
  const securePassword = await bcrypt.hash(req.body.newpassword, 10);
   const update = { Password: securePassword };
   let doc = await Details.findOneAndUpdate(filter, update, {
     new: true,
   });

   if(doc!=null)

   {
     res.json({
       Value:1,
       status:"Successfully Changed Password!!"
     })
   }
   else{
     res.json({
       Value:0,
       status:"Invalid User!!"
     })
   }
 
});
module.exports = router;
