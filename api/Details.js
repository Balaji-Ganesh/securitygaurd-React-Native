const router = require("express").Router();
const Details = require("./../models/Login");
const bcrypt = require("bcrypt");

// Creating a new user..
// Registration.. <- will happen through postman for creation of new users.
router.post("/", async (request, response) => {
  try {
    /*---------------------------------- Registering a new user--------------------------------- */
    // Generate the hashed password -- Security concern..
    const saltRounds = 10; // Tune it according, as per requirement.
    console.log(request.body);
    const defaultPwd = "GatePassApplication";
    const hashedPwd = await bcrypt.hash(defaultPwd, saltRounds);
    // Go for creation of the new user..
    const newUser = new Details({
      id: request.body.id,
      password: hashedPwd,
      name: request.body.name,
      role: request.body.role,
      profilePicture: "", // currently no use. May be in future.
    });

    // Save the new user..
    const user = await newUser.save();
    // After successful save..!!
    // Remove the password field before sending..
    const userModified = Object.keys(user).reduce((object, key) => {
      if (key !== "password") {
        object[key] = user[key];
      }
      return object;
    }, {});
    response.status(200).json(userModified);
    console.log(
      "[SUCCESS] New user has with default password is successfully Created. User is requested to change in first login."
    );
  } catch (error) {
    response.status(500).json(error);
    console.log("[ERROR] New user Registration failed. Desc: " + error);
  }
});

// Updation..
router.put("/:id", async (request, response) => {
  // Small validation..

  console.log("[INFO] Received update request for id: ", request.params.id);
  try {
    // Get the user..
    const updatedUserDetails = await Details.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      }
      // { new: true }
    );
    console.log("[SUCCESS] User updated successfully");
    response.status(200).json(updatedUserDetails);
  } catch (error) {
    console.error("[ERROR] User updation failed. Error: " + error);
  }
});

