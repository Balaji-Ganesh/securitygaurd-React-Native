const Details = require("./../models/Login");
const express = require("express");

const router = express.Router();

router.get("/Login", (req, res) => {
  res.json({
    name: "shiv",
  });
});

// For creating a new user
router.post("/Login", async (req, res) => {
  const login = new Details({
    Name: req.body.name,
    Password: req.body.password,
  });

  const result = await login.save();
  res.json({
    Status: "Data Added to the DB!!",
    value: result.name,
  });
});

// for getting a existing user...(for authentication purpose) based on
router.post("/authenticate", async (request, response) => {
  try {
    //Fetch the credentials from the database..
    const userCredentials = await User.findOne({
      id: request.body.Name,
      role: request.body.role, // use as filter
    });
    !userCredentials &&
      response.status(400).json("Incorrect Credentials, Please try again..!");

    // validate the password -- on successful user found..
    const validationStatus = bcrypt.compare(
      request.body.password,
      userCredentials.password
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


module.exports = router;
