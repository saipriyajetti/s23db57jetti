var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rabbit', { title: 'Search Results rabbit' });
});
var express = require('express');
const rabbit_controlers= require('../controllers/rabbit');
var router = express.Router();
/* GET rabbits */
router.get('/', rabbit_controlers.rabbit_view_all_Page );
module.exports = router;