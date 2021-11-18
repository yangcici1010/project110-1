var express = require('express');
var router = express.Router();
var db = require('../utils/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Crown2' });
});

module.exports = router;
