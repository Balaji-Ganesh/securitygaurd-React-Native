//we create mongoose to communicate to mongoDB
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    RollNumber: String,
    Time: Date,
    Type: Number,
    Name: String,
    Reason:String,
  },
  {
    timestamps: True,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
