var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "East-Europe";

router.get("/", (req, res) => {
  res.render(`East-Europe`);
});




module.exports = router;