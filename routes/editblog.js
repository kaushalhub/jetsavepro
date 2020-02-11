var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "jetsaveblog";

router.get("/", (req, res) => {
    res.render(`editblog`);
});


router.post("/insert", upload.single("blogimage"), (req, res) => {
    let body = req.body;

    body["blogimage"] = req.file.filename;
    console.log(req.body);
    pool.query(`insert into jetsaveblog set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/editblog");
    });
});

module.exports = router;
