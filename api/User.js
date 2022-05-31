const express = require("express");

// const app = express();
const User = require("./../models/User");

const router = express.Router();

// //getting student data
router.post("/Search", async (req, res) => {
  // console.log(req.body.name);

  //     // seraching the data of the student in database
  const result = await User.find({ RollNumber: req.body.data });

  if (result.length > 0) {
    res.json({
      status: "Success",
      Value: 1,
      data: req.body.data,
    });
  } else {
    res.json({
      Value: 0,
      status: "FAILED TO FIND STUDENT",
      message: "An error occured!!",
    });
  }
});

// //getting SINGLE student data <-- gate keeper requests on this route..
router.post("/Validate/:rollNo", async (req, res) => {
  // console.log(req.body.name);

  // seraching the data of the student in database
  const result = await User.find({ RollNumber: req.params.rollNo });

  if (result.length > 0) {
    // console.log(result);
    // Update the "Type", after scanned (for GatePass only)
    if (result[0].Type == 1) {
      // 1: GatePass, 0: LunchPass, -1: AlreadyScanned/Expired
      const filter = { RollNumber: req.body.data };
      const update = { Type: -1 }; // -1 to hold the expiration.

      // `doc` is the document _before_ `update` was applied
      await User.findOneAndUpdate(filter, update);
      console.log(
        "[INFO] Changed expiration of permission (1 -> -1) Successfully"
      );
    }
    console.log(
      "[INFO] Permission retrieved successfully for RollNumber: " +
        req.params.rollNo
    );
    res.status(200).json({
      RollNumber: result[0].RollNumber,
      facultyId: result[0].Name,
      Type: result[0].Type,
    });
  } else {
    console.log(
      "[ERROR] Permission retrieval failed for RollNumber: " + req.params.rollNo
    );
    res.status(404).json({
      message:
        "No such permission found with that RollNumber: " + req.params.rollNo,
    });
  }
});

// Get all the permissions.. -- for ADMIN.
router.get("/permissions", async (request, response) => {
  let permissions;
  try {
    // Get all the permissions..
    permissions = await User.find();

    // Send the retrieved (filtered) permissions..
    console.info("[SUCCESS] Multiple permissions retrieved successfully");
    response.status(200).json(permissions);
  } catch (error) {
    console.error("[ERROR] Error in retrieving all permissions.");
    response.status(500).json("Sorry, Unable to retrieve permissions.");
  }
});

// remove all the permissions (after admin takes the logs)
router.delete("/permissions", async (request, response) => {
  try {
    const results = await User.deleteMany({ Type: { $not: { $eq: 0 } } }); // passing filter deletes that all the documents which are NOT Lunch passes
    console.log(results)
    console.log("[INFO] All permissions deleted successfully");
    response.status(200).json("All Permissions deleted sucessfully");
  } catch (error) {
    console.log("[ERROR] Deleting all permissions failed due to: " + error);
    response.status(500).json("Deleting all permissions failed.");
  }
});

module.exports = router;
