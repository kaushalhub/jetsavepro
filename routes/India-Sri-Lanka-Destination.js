


var express = require("express");
//   
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "India-Sri-Lanka-Destination";

router.get("/", (req, res) => {
    res.render(`India-Sri-Lanka-Destination`);
});


module.exports = router;