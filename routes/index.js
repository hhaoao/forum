var express = require('express');
var router1 = express.Router();

/* GET home page. */
router1.get('/', function(req, res) {
  res.render('index', { title: '首页',body:"index1"});
});

module.exports = router1;
