var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "travel_west";

router.get("/", (req, res) => {
    res.render(`travel_west`);
});


module.exports = router;