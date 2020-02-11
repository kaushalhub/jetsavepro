var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "The-Breathtaking-Eastern-Explorer-Tour";

router.get("/", (req, res) => {
    res.render(`The-Breathtaking-Eastern-Explorer-Tour`);
});

module.exports = router;