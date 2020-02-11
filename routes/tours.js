var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "rajisthan";

router.get('/rajisthan-tours', (req, res) => {
  res.render('tours/rajisthan-tours');
});

router.get('/kerala-tours', (req, res) => {
  res.render('tours/kerala-tours');
});


router.get('/netherlands-germany-hungary-tours', (req, res) => {
  res.render('tours/netherlands-germany-hungary-tours');
});


router.get('/delhi-tours', (req, res) => {
  res.render('tours/delhi-tours');
});

module.exports = router;