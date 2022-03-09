// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){

  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
var numb1 = Number(req.body.n1);
var numb2 = Number(req.body.n2);

var result = numb1 + numb2;

  res.send("The result of the calculator is" + result);

})


app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
