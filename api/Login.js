const Details = require('./../models/Login');
const express = require('express');

const router = express.Router();



router.get("/Login",(req,res)=>{

    res.json({
        name:"shiv",
    })
})




router.post("/Login",async(req,res)=>{
   
    
    const login = new Details({
         Name : req.body.name,
         Password : req.body.password,
    })

    const result = await login.save();
    res.json({
        Status:"Data Added to the DB!!",
        value:result,
        
    })
})

router.get("/ChangePassword", (res, res) => {
  res.send("hii");
});

router.post("/ChangePassword", async (req, res) => {
  // const Tname = req.body.name;

  // const UserName = req.body.teachername;
  // const oldPassword = req.body.oldpassword;
  // const newpassword = req.body.newpassword;

  // var query = { Name : UserName,Password : oldPassword};

  res.json({
    data: "data got it!!",
  });

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

module.exports = router;



