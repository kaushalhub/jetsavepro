var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "banner";

router.get("/", (req, res) => {
    res.render(`bannerimage`);
});


router.post("/insert", upload.single("bannerimage"), (req, res) => {
    let body = req.body;
    pool.query(`insert into ${table} set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/dataitineraries");
    });
});


module.exports = router;