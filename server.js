//mongodb file
require('./config/db')


const express = require('express');
const bodyParser =  require('body-parser');
const { append } = require('express/lib/response');

const UserRoute = require('./api/User');

const app = express();

const port = process.env.PORT || 3000;

//for accecpting post Data
app.get("/",(req,res)=>{
    res.json({
        name:'shiv',
    })
})

app.use(bodyParser.json());


//
app.use('/user',UserRoute);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})


