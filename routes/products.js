var express = require('express');
var router = express.Router();

var db = require("../db/db");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('products', { title: 'Products', products: db.products});
});

module.exports = router;
