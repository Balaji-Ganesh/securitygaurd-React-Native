require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true
}).then( ()=>{
    console.log('connected to the database!!');


}).catch((error)=>{

    console.log('error!!');

})
