const { Router } = require('express');
const express = require('express');
const app = express();
const User = require('./../models/User');

const router = express.Router();

const users = new User({
    name:'19BD1A0508',
})
users.save();


// //getting student data
router.get("/Search",(req,res)=>{

    // console.log(req.body.name);

    //seraching the data of the student in database
//     User.find({name:req.body.name}).then(
//         result =>{

//             if(result.length)
//             {
//                 //add api to convert data into qr code

//                 console.log(result);


           

// qr.toDataURL(url, (err, src) => {
//     if (err) res.send("Error occured");
  
//     // Let us return the QR code image as our response and set it to be the source used in the webpage
//     res.render("scan", { src });
// });



//             }

//         }
//     ).catch( (err)=>{

//         console.log(err);
//         res.json({
//             status: "FAILED TO FIND STUDENT",
//             message: "An error occured!!"
//         })

//     })

  res.send("hi");
})
module.exports = router;