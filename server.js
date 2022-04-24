//mongodb file
require('./config/db')


const express = require('express');
const bodyParser =  require('body-parser');
const { append } = require('express/lib/response');
// const cors = require('cors');

const UserRoute = require('./api/User');
const Login = require('./api/Login');
const Push = require('./api/Push');

const app = express();

// app.use(cors());

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// for accecpting post Data
app.get("/",(req,res)=>{
    res.json({
        name:'shiv',
    })
})

app.use(bodyParser.json());


//
// app.use('/user',UserRoute);
app.use('/',UserRoute);
app.use('/',Login);
app.use('/',Push);

// app.use('')
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})


