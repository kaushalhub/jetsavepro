var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "demo";

router.get('/demo', (req, res) => {
  res.render('blogss/demo');
});

module.exports = router;