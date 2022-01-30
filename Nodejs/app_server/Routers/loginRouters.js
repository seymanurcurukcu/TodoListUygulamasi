var express = require('express');
var router = express.Router();

var ctrllogin = require('../Controller/loginController');

router.get('/', ctrllogin.index);
router.post('/', ctrllogin.indexpost);
module.exports = router;

