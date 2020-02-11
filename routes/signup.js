var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "signup";

router.get("/", (req, res) => {
    res.render(`signup`);
});

module.exports = router;