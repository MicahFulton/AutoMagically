var express = require('express');

var bodyParser = require('body-parser');

var search = require('./routes/search');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/search', search);

app.use(function(err, req, res, next) {
    res.send(500);
});

module.exports = app;
