var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "additineraries";

router.get("/", (req, res) => {
    res.render(`additineraries`);
});


router.post("/insert", upload.single("thumbnail"), (req, res) => {
    let body = req.body;
    body["thumbnail"] = req.file.filename;
    pool.query(`insert into ${table} set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/additineraries");
    });
});

// router.post('/', upload.any(), function (req, res, next) {
//     console.log(req.files);
//     res.send(req.files);

module.exports = router;