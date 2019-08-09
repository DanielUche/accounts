var express = require('express');
var router = express.Router();

const BASE_URL = '/accounts';

/* GET home page. */
router.get(`${BASE_URL}/`, function(req, res, next) {
  console.log('i got here');
  res.json({
    msg: 'Welcome to Accounts endpoints',
  });
});

router.get(`${BASE_URL}/list`, function(req, res, next) {
  console.log('i got here');
  res.json({
    msg: 'Welcome to Accounts endpoints list end point',
  });
});

module.exports = router;
