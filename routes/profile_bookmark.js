var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var cookieSession = require('cookie-session');
var upload = require("./multer");
var pool = require("./pool");
let table = "profile_bookmark";

router.get("/", (req, res) => {
    if (req.session.id) {

        var query = `select * from editblog where userid = "${req.session.id}";`
        var query1 = `select name,image,username,facebook,instagram,youtube,bio,twitter from signup where id = "${req.session.id}"; `
        var query2 = `select count(id) as totalblog from editblog where userid = "${req.session.id}";`
        pool.query(query + query1 + query2, (err, result) => {
            if (err) throw err;
            else res.render(`profile_bookmark`, { result: result });
            // else res.json(result)
            console.log(result)
        })
    }
    else {
        res.redirect('/login')
    }
});

router.get("/allblogarea", (req, res) => {
    const { a } = req.query

    var query = `select * from editblog where userid = "${req.session.id}" and blogarea = "${req.query.a}" `
    pool.query(query, (err, result) => {
        if (err) throw err;
        else res.json(result);
    });
});


router.get("/alltypename", (req, res) => {
    const { a, b } = req.query

    var query = `select * from editblog where userid = "${req.session.id}" and typename = "${req.query.b}" and blogarea = "${req.query.a}"  `
    pool.query(query, (err, result) => {
        if (err) throw err;
        else res.json(result);
    });
});

module.exports = router;