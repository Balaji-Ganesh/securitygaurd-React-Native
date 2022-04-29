const express = require('express');
const app = express();
// const Details = require('../models/Login');

app.get("/Changepassword",(res,res)=>{
  res.send("hii");
})

app.post("/Changepassword",async(req,res)=>{

// const Tname = req.body.name;

// const UserName = req.body.teachername;
// const oldPassword = req.body.oldpassword;
// const newpassword = req.body.newpassword;

// var query = { Name : UserName,Password : oldPassword};

res.json({

  data:"data got it!!",
})


// await Details.updateOne(
  
//     query,
  
//   { Password: newpassword },
//   (error,result)=>{

//     if(error){
//       res.json({

//         status:400,
//         Data:"error",
//       })
//     }
   

//     if(result!=null){

//       res.json({

//        status : 200,
//        data:"Updated successsfully!!"

//       })
//     }
   

//     else
//    {
//      res.json({
//        status: 400,
//        Data: "Unable to update data",
//      });
//    }



//   }

// );




});
module.exports = app;


