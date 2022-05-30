//mongodb file
require("./config/db");




const express = require('express');
const bodyParser =  require('body-parser');
const { append } = require('express/lib/response');
 
const cors = require('cors');
const UserRoute = require('./api/User');
const Login = require('./api/Login');
const Push = require('./api/Push');
const ChangePassword = require('./api/Login1');
const DetailsRoute = require("./api/Details");
const StudentLogin = require("./api/Slogin");

const { options } = require('./api/User');

const app = express();

app.use(cors({
   origin:'*',
}))

 




const port = process.env.PORT || 3000;

// for accecpting post Data
app.get("/", (req, res) => {
  res.json({
    name: "shiv",
  });
});

app.use(bodyParser.json());

/** Few configurations.. -- Setting Middlewares..*/
// CORS.. error fix: https://www.freecodecamp.org/news/access-control-allow-origin-header-explained/
// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "https://yoursite.com");  // to allow only for specific browser..
  res.setHeader("Access-Control-Allow-Origin", "*"); // to allow from any browser
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//
// app.use('/user',UserRoute);




app.use('/',UserRoute);
app.use('/',Login);
app.use('/',Push);
app.use('/',ChangePassword);
app.use("/api/Details", DetailsRoute);
app.use('/',StudentLogin);



// app.use('')
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
