var express = require('express');
var router = express.Router();

var cardJson = require('../AllCards');

var match = function(str) {
  return Object.keys(cardJson).filter(function(item) {
    return item.toLowerCase().indexOf(str.toLowerCase()) === 0;
  });
};

/* GET users listing. */
router.get('/', function(req, res) {
  var query = req.param('query');
  res.json(match(query));
});

module.exports = router;


