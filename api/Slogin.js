const Details = require("./../models/Login");
const express = require("express");

const bcrypt = require("bcrypt");

const router = express.Router();
router.post("/Slogin", async (req, res) => {
//   //admin will add all teachers with their roles so insertion of new data only checking if the techer exist or not which is added by admin only

//   const data = await Details.find({ Name: req.body.name });
//   //  console.log(data);
//   //    const hashpassword = data[0].Password;
//   //    const userpassword = req.body.password;

//   //     const resu = await bcrypt.compare(userpassword, hashpassword);

//   if (data.length > 0) {
//     res.json({
//       Value: 1,
//       Status: "Details exist!",
//     });
//   } else {
//     res.json({
//       Value: 0,
//       Status: "Teacher not exist!!",
//     });
//   }

  const securePassword = await bcrypt.hash(req.body.password, 10);
  const login = new Details({
       Name : req.body.name,
       Password : securePassword,
       role:"Student",
  })

  const result = await login.save();
  res.json({
      Status:"Data Added to the DB!!",
      value:1,

  })
});

module.exports = router;