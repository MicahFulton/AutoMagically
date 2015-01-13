var express = require('express');
var router = express.Router();

var cardJson = require('../AllCards');
var cardArr = Object.keys(cardJson);

var match = function(str) {
  return cardArr.filter(function(item) {
    return item.toLowerCase().indexOf(str.toLowerCase()) === 0;
  })
  .map(function(item) {
    return cardJson[item];
  });
};

router.get('/', function(req, res) {
  var query = req.param('query') || '';
  res.json(match(query));
});

module.exports = router;


