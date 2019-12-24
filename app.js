"use strict";

const http = require("http"),
      fs = require("fs"),
      express = require("express"),
      bodyParser = require('body-parser'),
      router = require("./routes/routes.js")


  //host
  let host = "127.0.0.1";

  //port
  let port = process.env.PORT || 27022;

  //express app
  let app = express();

  //set the tem[plet engine
  app.set("views", "./views");
  app.set("view engine", "ejs");

  //set static files
  app.use("/assets", express.static(__dirname + "/public"));


  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

   //use the routes
  app.use("/", router)


  app.listen(port, host, () => {
  	console.log(`Server is running on ${host}:${port} `)
  })
