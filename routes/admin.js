var express = require('express');
var router = express.Router();
let AdminControllers = require('../controllers/admin')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Admin panel' });
});
router.get('/subjects',AdminControllers.subjects);
router.get('/addsubjects',AdminControllers.addSubject);
router.get('/updatesubject',AdminControllers.updateSubject);
module.exports = router;
