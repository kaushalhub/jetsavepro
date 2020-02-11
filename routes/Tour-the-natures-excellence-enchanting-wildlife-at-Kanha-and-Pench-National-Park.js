var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "Tour-the-natures-excellence-enchanting-wildlife-at-Kanha-and-Pench-National-Par"


    
router.get("/", (req, res) => {
        res.render(`Tour-the-natures-excellence-enchanting-wildlife-at-Kanha-and-Pench-National-Park`);
});

module.exports = router;
    