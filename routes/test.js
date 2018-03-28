var express = require('express');
var router = express.Router();
var testHandler = require('../public/javascripts/test1');

/* GET home page. */
router.get('/', function(req, res, next) {
  var res1 = testHandler.HandleBasicFlow(req);
  res.send(res1);
});

module.exports = router;
