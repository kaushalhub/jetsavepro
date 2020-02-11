var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var pool = require("./pool");
let table = 'new';




router.get('/', (req, res) => {
    res.render(`${table}/index`)

})


router.get('/', (req, res) => {
    res.render(`${table}/index`)
})




module.exports= router()