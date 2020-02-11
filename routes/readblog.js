var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "readblog";



router.get(`/`, (req, res) => {
    const {id} = req.query
        pool.query(`select * from editblog where blogtext = '${id}'`, (err, result) => {
        if (err) throw err
       //  else res.json(result)
        else {
             
            res.render('readblog', { result: result });
        }
    });
});

module.exports = router;
