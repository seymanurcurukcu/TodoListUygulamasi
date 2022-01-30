var express = require('express');
var router = express.Router();

var ctrlGorevler = require('../Controller/GorevEkleController');

router.get('/', ctrlGorevler.index);
router.post('/', ctrlGorevler.indexpost);

module.exports = router;