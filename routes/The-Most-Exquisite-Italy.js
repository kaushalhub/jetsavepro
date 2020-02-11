    

var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "The-Most-Exquisite-Italy";

router.get("/", (req, res) => {
    res.render(`The-Most-Exquisite-Italy`);
});

module.exports = router;