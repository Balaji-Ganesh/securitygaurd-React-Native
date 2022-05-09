const express = require("express");

// const app = express();
const User = require("./../models/User");

const router = express.Router();

// const users = new User({
//   RollNumber : '19BD1A0508',
//   // Type:true,
// })
// users.save();

// //getting SINGLE student data
router.post("/Search", async (req, res) => {
  // console.log(req.body.name);

  //     // seraching the data of the student in database
  const result = await User.find({ RollNumber: req.body.data });

  if (result.length > 0) {
    res.json({
      status: "Success",
      Value: 1,
      // data : req.body.data
    });
  } else {
    res.json({
      Value: 0,
      status: "FAILED TO FIND STUDENT",
      message: "An error occured!!",
    });
  }
});

// Get all the permissions.. -- for ADMIN.
router.get("/", async (request, response) => {
  let posts;
  try {
    // Get all the posts..
    posts = await Permission.find();

    // Send the retrieved (filtered) posts..
    console.info("[SUCCESS] Multiple permissions retrieved successfully");
    response.status(200).json(posts);
  } catch (error) {
    console.error("[ERROR] Error in retrieving all permissions.");
    response.status(500).json("Sorry, Unable to retrieve permissions.");
  }
});
module.exports = router;
