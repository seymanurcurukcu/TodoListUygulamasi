var express = require('express');
var router = express.Router();

var ctrlGorevler = require('../Controller/GorevlerController');

router.get('/', ctrlGorevler.index);
router.post('/devamPost', ctrlGorevler.devamPost);
router.post('/bekleyenPost', ctrlGorevler.bekleyenPost);
module.exports = router;
