var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "editdata";

router.get("/", (req, res) => {
    res.render(`editdata`);
});

module.exports = router;