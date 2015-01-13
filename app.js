var express = require('express');

var bodyParser = require('body-parser');

var search = require('./routes/search');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/search', search);

app.use(function(err, req, res, next) {
    res.send(500);
});

module.exports = app;
