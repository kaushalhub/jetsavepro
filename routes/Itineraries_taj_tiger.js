var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Itineraries_taj_tiger";

router.get("/", (req, res) => {
    res.render(`Itineraries_taj_tiger`);
});


module.exports = router;