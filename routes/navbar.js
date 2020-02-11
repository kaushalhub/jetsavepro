var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "navbar";

router.get("/", (req, res) => {
    res.render(`navbar`);
});


module.exports = router;