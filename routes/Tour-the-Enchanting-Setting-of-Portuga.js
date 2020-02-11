var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Tour-the-Enchanting-Setting-of-Portuga";

router.get("/", (req, res) => {
    res.render(`Tour-the-Enchanting-Setting-of-Portuga`);
});

module.exports = router;