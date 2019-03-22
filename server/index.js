var express = require("express");
var app = express();
var router = require("./router.js");
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true })); 
app.use("/api",router);

app.listen(3001,function(){
    console.log("服务器运行在3001端口上");
    
})