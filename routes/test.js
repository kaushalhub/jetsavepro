var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "test";

router.get("/", (req, res) => {
    res.render(`test`);
});


module.exports = router;