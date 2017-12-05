var express = require('express');
var router = express.Router();

var db = require("../db/db");

/* GET home page. */
router.get('/', function(req, res, next) {
//add to review
    db.basket.push({
    product: req.query.id
    });

    var product;

    if(req.query.id){
        for(var i=0; i < db.products.length; i++){
            if(db.products[i].product_id == req.query.id ){
                product = db.products[i];
                break;
            }
        }
    }

    res.render('payment', { title: 'Payment' });

});
module.exports = router;
