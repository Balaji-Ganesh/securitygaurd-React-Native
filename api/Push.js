const User = require("../models/User");
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/Push", (req, res) => {
  res.json({
    name: "Shinjkkjb",
  });
});

app.post("/Push", async (req, res) => {
  const { name, date, value, teacherName } = req.body;
  const users = new User({
    RollNumber: name,
    Time: date,
    Type: value,
    Name: teacherName,
  });

  const result = await users.save();
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
      permissionStatus: (value == 1),
      facultyId: teacherName,
      grantedAt: date,
    })
    .then((msg) => console.log("publish to API status: " + msg))
    .catch((error) => console.log("PUSH to other API error. Reason: " + error));
  //// ends here...
  res.json({
    status: "Roll Number push successfully!!",
    data: result,
  });
});
module.exports = app;
