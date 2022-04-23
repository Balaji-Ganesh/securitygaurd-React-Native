//we create mongoose to communicate to mongoDB
const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    RollNumber:String,
    // Time:Date,
    // Type:Boolean,
}) 

const User = mongoose.model('User',UserSchema);

module.exports = User;