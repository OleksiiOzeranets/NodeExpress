require("dotenv").config();

let express = require('express');
let app = express();
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
  });
  
  absolutePath = __dirname + "/views/index.html";
  app.get("/", function (req, res) {
    res.sendFile(absolutePath);
  });
  app.get(
    "/now",
    function (req, res, next) {
      req.time = new Date().toString();
      next();
    },
    function (req, res) {
      res.json({ time: req.time });
    },
  );
  app.get("/json", function (req, res) {
    const message =
      process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "hello json";
   console.log(process.env.MESSAGE_STYLE)
    // fetch('dev')
    // fetch('process.env.value')
    // fetch('qa')
    // fetch('qa2')
    res.json({ message });
  });
  
  app.use("/public", express.static(__dirname + "/public"));
  
  module.exports = app;




































