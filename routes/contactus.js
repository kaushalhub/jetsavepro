var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "contactus";

router.get("/", (req, res) => {
    res.render(`contactus`);
});


router.post("/insert", (req, res) => {
    let body = req.body;
    pool.query(`insert into contactus set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/");
    });
});

module.exports = router;