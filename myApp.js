let express = require('express');
let app = express();
require('dotenv').config(process.env['MESSAGE_STYLE'])


var response = "Hello World".toUpperCase();

console.log("Hello World");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});


//6
app.get("/json", (request, response) => {
 if(process.env["MESSAGE_STYLE"] == 'uppercase'){
   response.json({"message":"HELLO JSON"});
 }else{
    response.json({"message":"Hello json"})
  }
});

//7
app.use(function middleware(req, res, next) {
  // Do something
  // Call the next function in line:
  next();
});


// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
































 module.exports = app;
