const Details = require("../models/Login");
const express = require("express");

const router = express.Router();

router.get("/Login1", (req, res) => {
  res.json({
    name: "shiv",
  });
});

router.post("/Login1", async (req, res) => {
  const login = new Details({
    Name: req.body.name,
    Password: req.body.password,
  });

  const result = await login.save();
  res.json({
    Status: "Data Added to the DB!!",
    value: result,
  });
});
module.exports = router;
