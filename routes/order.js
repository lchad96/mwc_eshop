var express = require('express');
var router = express.Router();

var db = require("../db/db");

/* GET home page. */
router.post('/', function(req, res, next) {
     console.log(req.body);

     db.orders.push(req.body);

     res.redirect("/ordercomplete");
   });

module.exports = router;
