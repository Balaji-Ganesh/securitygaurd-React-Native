//creating teacher collection

const mongoose = require('mongoose');

const TeacherDetails = mongoose.Schema({
    Name:String,
    Password:String,
})

const Details = mongoose.model('Details',TeacherDetails);

module.exports = Details;