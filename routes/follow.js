var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
const nodemailer = require('nodemailer');

var pool = require("./pool");
let table = "follow";

router.get("/", (req, res) => {
  res.render(`follow`);
});


router.post('/send', (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var enquiry = req.body.enquiry;

  var emailMessage = `${name},\n\nThank you for contacting us.\n\nYour email is: ${email}.\n\nYour enquiry is: ${enquiry}\n.`;

  console.log(emailMessage);
  res.redirect('/follow');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    
    auth: {
    
      user: 'jainkaushal123456@gmail.com',
      pass:' jain123456789'
    }
  });

  var emailOptions = {
    from: 'jainkaushal123456@gmail.com',
    to: 'kaushal.ttb@gmail.com',
    subject: 'Node Mailer Test',
    text: emailMessage
  };

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.redirect('/follow');
    } else {
      console.log('Message Sent: ' + info.response);
      console.log('Email Message: ' + emailMessage);
      res.redirect('/contact_error');
    }
  });
});

module.exports = router;