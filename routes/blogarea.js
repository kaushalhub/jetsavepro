var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "blogarea";

router.get("/", (req, res) => {
    res.render(`blogarea`);
});

router.post("/insert", (req, res) => {
    let body = req.body;
    pool.query(`insert into ${table} set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/blogarea");
    });
});

router.get("/allblogarea", (req, res) => {
    var query = `select * from blogarea `;
    pool.query(query, (err, result) => {
        if (err) throw err;
        else res.json(result);
    });
});

module.exports = router;