const express = require("express");

// const app = express();
const User = require("./../models/User");

const router = express.Router();


// //getting student data
router.post("/Search", async (req, res) => {
  // console.log(req.body.name);

  //     // seraching the data of the student in database
  const result = await User.find({ RollNumber: req.body.data });

  // console.log(result);
  

  //if no of instance is equal to 0 then changed it to one and allow the student to search else don't allow
  if (result.length > 0 && result[0].Instances == 0) {
     
    //change no of instance to 1 i.e update
   const filter = { RollNumber: req.body.data };
   const update = { Instances :1};

   // `doc` is the document _after_ `update` was applied because of
   // `new: true`
   let doc = await User.findOneAndUpdate(filter, update, {
     new: true,
   });

   console.log(doc);

    res.json({
      status: "Success",
      Value: 1,
      data: req.body.data,
    });
  } 
  else if(result.length > 0 && result[0].Instances == 1){
    res.json({
      Value: -1,
      status: "Another login Cannot be created",
      // message: "An error occured!!",
    });

  }
  else {
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
  console.log(result);

  if (result.length > 0) {
    // console.log(result);
    // Update the "Type", after scanned (for GatePass only)
    if (result[0].Type == 1) {
      // 1: GatePass, 0: LunchPass, -1: AlreadyScanned/Expired
      // console.log(req.body.data);
      const filter = { RollNumber: result[0].RollNumber};
      const update = { Type: -1 }; // -1 to hold the expiration.

      // `doc` is the document _before_ `update` was applied
      const doc = await User.findOneAndUpdate(filter, update, {
        new: true, 
      });
      // console.log(doc);
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


module.exports = router;
