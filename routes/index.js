var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var nodemailer = require('nodemailer');
var pool = require("./pool");
let table = "index";




router.get("/", (req, res) => {
  if (req.session.id) {

    var query = `select name,image,username,facebook,instagram,youtube,bio,twitter from signup where id = "${req.session.id}"; `
    pool.query(query, (err, result) => {
      if (err) throw err;
      else res.render(`index`, { login: true , result : result});
   
    })
  }
  else {
    res.render('index', { login: false });
  }
});

router.post("/insert", (req, res) => {
  let body = req.body;
 
  pool.query(`insert into formdata set ?`, body, (err, result) => {
    if (err) throw err;
    else res.redirect("/success");
  });
});


router.post('/success', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Mobile: ${req.body.number}</li>
      <li>Start City: ${req.body.startcity}</li>
      <li>Country: ${req.body.country}</li>
      <li>City: ${req.body.city}</li>
      <li>Start Date: ${req.body.date}</li>
      <li>Trip : ${req.body.trip}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kaushal.ttb@gmail.com', // generated ethereal user
      pass: 'jainjain123'  // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  var mailOptions = {
    from: 'Jetsave Tours <kaushal.ttb@gmail.com>', // sender address
    to: 'jainkaushal123456@gmail.com,kartik.jetsave@gmail.com', // list of receivers
    subject: 'Jetsave Tour Requiest', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
   else res.redirect('/', { msg: 'Email has been sent' });
  });
});

module.exports = router;



