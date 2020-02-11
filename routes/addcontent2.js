var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "addcontent2";

router.get("/", (req, res) => {
    res.render(`addcontent2`);
});


router.post("/insert", upload.single("day2image"), (req, res) => {
    let body = req.body;
    body["day2image"] = req.file.filename;
    pool.query(`insert into ${table} set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/addcontent2");
    });
});

router.get("/all", (req, res) => {
    var query = `select * from addcontent2 `;
    pool.query(query, (err, result) => {
        if (err) throw err;
        else res.json(result);
    });
});

router.get("/delete", (req, res) => {
    const { id } = req.query;
    pool.query(`delete from addcontent2 where id = ${id}`, (err, result) => {
        if (err) throw err;
        else res.redirect("/addcontent2");
    });
});

module.exports = router;
