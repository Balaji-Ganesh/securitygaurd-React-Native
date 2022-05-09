//creating teacher collection

const mongoose = require('mongoose');

const TeacherDetails = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: {
        values: ["Student", "Teacher", "GateKeeper"], // Only these values are allowed
        message: "{VALUE} is not supported", // Mongoose replaces {VALUE} with the value being validated.
      },
    },
  },
  { timestamps: true }
);

const Details = mongoose.model('Details',TeacherDetails);

module.exports = Details;