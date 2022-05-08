const User = require("../models/User");
const express = require("express");
const axios = require("axios");

const app = express();

// <<<<<<< HEAD


// app.get("/Push",(req,res)=>{
//     res.json({

//         name:'Shinjkkjb',
//     })
// })

// app.post("/Push",async(req,res)=>{

//     const findingDetails = await User.find({ RollNumber: req.body.name });

//     if(findingDetails.length > 0)
//     {
//         res.json({

//             Value:0, //student already present

//         })

//     }

//      else{

//             const users = new User({
//               RollNumber: req.body.name,
//               Time: req.body.date,
//               Type: req.body.value,
//               Name: req.body.teacherName,
//             });

//             const result = await users.save();

//             res.json({
//               status: "Roll Number push successfully!!",
//               Value:1, // new Student
//             //   data: result,
//             });

//      }


// })
// // =======
// app.get("/Push", (req, res) => {
//   res.json({
//     name: "Shinjkkjb",
//   });
// });

app.post("/Push", async (req, res) => {

  const { name, date, value, teacherName } = req.body;
  const findingDetails = await User.find({ RollNumber: req.body.name });
  if(findingDetails.length > 0)
    {
        res.json({

            Value:0, //student already present

        })

    }

    else{
       const users = new User({
         RollNumber: name,
         Time: date,
         Type: value,
         Name: teacherName,
       });
        const result = await users.save();
         res.json({
              status: "Roll Number push successfully!!",
              Value:1, // new Student
            });

    }
 

 
  /// to push also to another API... starts here..
  //   console.log(name + ", " + date + ", ");
  //   console.log("Sending msg to another API");
  //   axios
  //     .get("https://gatepassapplication.herokuapp.com/api/permission/")
  //     .then((msg) => console.log(msg))
  //     .catch((error) => console.log("error: Rreason: " + error));
  axios
    .post("https://gatepassapplication.herokuapp.com/api/permission/", {
      studentId: name,
      reason: "--",
      passMode: value,
      permissionStatus: value,
      facultyId: teacherName,
      grantedAt: date,
    })
    .then((msg) => console.log("publish to API status: " + msg))
    .catch((error) => console.log("PUSH to other API error. Reason: " + error));
  //// ends here...
 
});

module.exports = app;
