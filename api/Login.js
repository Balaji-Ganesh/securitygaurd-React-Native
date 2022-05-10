
const Details = require('./../models/Login');
const express = require('express');

const bcrypt = require("bcrypt");

const router = express.Router();

router.get("/Login", (req, res) => {
  res.json({
    name: "shiv",
  });
});

// For creating a new user


// for getting a existing user...(for authentication purpose) based on
router.post("/api/authenticate", async (request, response) => {
    // console.log(request.body)
  try {
    //Fetch the credentials from the database..
    const userCredentials = await Details.findOne({
      Name: request.body.Name,
    });
    !userCredentials &&
      response.status(400).json("Incorrect Credentials, Please try again..!");

    // validate the password -- on successful user found..
    const validationStatus = bcrypt.compare(
      request.body.password,
      userCredentials.Password
    );
    !validationStatus &&
      response.status(400).json("Incorrect credentials, Please try again.!");

    console.log("[INFO] user login request served successfully.");
    // On successful password validation..
    // Pullout the password (Preventing the password to be leaked outside..)
    const { password, ...otherDetails } = userCredentials._doc;
    response.status(200).json(otherDetails);
  } catch (error) {
    console.log("[ERROR] Login failed. Error: " + error);
    response.status(500).json();
  }
});




router.post("/Login",async(req,res)=>{

   const data = await Details.find({Name:req.body.name});
  //  console.log(data);
//    const hashpassword = data[0].Password;
//    const userpassword = req.body.password;

//     const resu = await bcrypt.compare(userpassword, hashpassword);

    if(data.length > 0)
    {
       res.json({
         Value: 1,
         Status:"Details exist!",
       }); 

    }
    else{
        res.json({
            Value:0,
            Status:"Teacher not exist!!",
        })
    }


   
    // const securePassword = await bcrypt.hash(req.body.password, 10);
    // const login = new Details({
    //      Name : req.body.name,
    //      Password : securePassword,
    // })

    // const result = await login.save();
    // res.json({
    //     Status:"Data Added to the DB!!",
    //     value:result,
        
    // })
})

module.exports = router;
