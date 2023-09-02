var express = require('express');
var router = express.Router();
// creating controller here
const flightsCtrl = require('../controllers/flights');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', flightsCtrl.new)
// controller will 
router.post('/', flightsCtrl.create)


module.exports = router;
