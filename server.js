const express = require('express');
const  app     = express();
const request = require('request');
const fs = require("fs");
const   bodyParser = require('body-parser');

const   os = require('os');
const   hostname = os.hostname(); 

const router = express.Router();
const path = __dirname + '/public/';

router.use(function (req,res,next) {
  //console.log("/" + req.method);
  next();
});

app.use("/",router);
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(function(req, res, next) { 
res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS"); 
res.header("Access-Control-Allow-Origin", "*"); 
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
next();
 });


const port = process.env.PORT || 8080;

 
app.use('/public/assets/', express.static(__dirname + '/public/assets/'));
app.use('/public/assets/css/', express.static(__dirname + '/public/assets/css/'));
app.use('/public/assets/fonts/', express.static(__dirname + '/public/assets/fonts/'));
app.use('/public/assets/images/', express.static(__dirname + '/public/assets/images/'));
app.use('/public/assets/js/', express.static(__dirname + '/public/assets/js/'));

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/contact-us",function(req,res){
  res.sendFile(path + "contact-us.html");
});
router.get("/development",function(req,res){
  res.sendFile(path + "development.html");
});

router.get("/join-us",function(req,res){
  res.sendFile(path + "join-us.html");
});

router.get("/portfolio",function(req,res){
  res.sendFile(path + "portfolio.html");
});

router.get("/service",function(req,res){
  res.sendFile(path + "service.html");
});

router.get("/playbook",function(req,res){
  res.sendFile(path + "playbook.html");
});

/* constlocalURI = "mongodb://localhost:27017/clc-project";
constmongoURL = localURI;

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(mongoURL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
}); */

app.listen(port,() => {
    console.log(`Server running at port `+port);
    });

console.log('nodejs server running on '+ port);

const https = require("https")

const data = JSON.stringify({"message":"The force is strong with this one..."})

const options = {
  hostname: "76793e65f0de83429b791d5066e232d3.m.pipedream.net",
  port: 443,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
}

const req = https.request(options, resp => {
  let data = ""
  resp.on("data", chunk => {
    data += chunk
  })
  resp.on("end", () => {
    console.log(JSON.parse(data))
  })
}).on("error", err => {
  console.error("[error] " + err.message)
})
req.write(data)
req.end()

module.exports = app;