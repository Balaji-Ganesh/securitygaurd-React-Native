//we create mongoose to communicate to mongoDB
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {

    RollNumber: {
      type: String,
      required: true,
      unique: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Time: {
      type: Date,
      required: true,
    },
    Type: {
      type: Number,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    NoOfInstance:{
      type:Number,
      required:true,
    }
  },
  { timestamps: true }

);

const User = mongoose.model("User", UserSchema);

module.exports = User;
