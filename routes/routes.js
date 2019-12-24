"use strict";

const express = require("express"),
      fs = require("fs"),
      nodemailer = require('nodemailer')
     



let router = express.Router();

router.get("/", (req, res, next) => {

  fs.createReadStream("./public/home/html/index.html").pipe(res);
});

// router.get("/resume", (req, res, next) => {

//   fs.createReadStream("./public/home/https://my.indeed.com/p/tawhida-8gzxjzt").pipe(res);
// });


// router.get("/thecharles", (req, res, next) => {
// 	fs.createReadStream("./public/thecharles/index.html").pipe(res);	
// });

// router.get("/37", (req, res, next) => {
// 	fs.createReadStream("./public/signals/index.html").pipe(res);	
// })

// router.post("/sendmail", (req, res, next) => {
// 	let myEmail = "ziaulsarker@gmail.com"

// 	let name = req.body.c_name;
// 	let email = req.body.c_email;
// 	let message = req.body.c_message;

// 	console.log(name)

// 	let transporter = nodemailer.createTransport("SMTP", {
// 		"service": "Gmail",
// 	    "auth": {
// 	        "user": "ziaulsarker@gmail.com",
// 	        "pass": "ZiaulSarker6462837989"
// 	    }
// 	});


// 	let mailOptions = {
// 	    from: email, // sender address
// 	    to: myEmail, // list of receivers
// 	    subject: name, // Subject line
// 	    text: message // plaintext body
// 	}

// 	transporter.sendMail(mailOptions, (err, info) => {
// 		if(err) { console.log("message sent") }
		
// 		else {

// 			console.log("messsage sent " + info.response)
// 		}
// 	});



// 	res.redirect("/");

	
// })




module.exports = router;
