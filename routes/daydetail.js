var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "daydetail";

router.get("/", (req, res) => {
    res.render(`daydetail`);    
});


router.post("/insert", (req, res) => {
    let body = req.body;
    pool.query(`insert into daydetail set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/daydetail");
    });
});


router.post("/update", (req, res) => {
    let body = req.body;
    pool.query(`update daydetail set ?`, body, (err, result) => {
        if(err) throw err;
        else res.redirect("/daydetail");
    })
})

module.exports = router;