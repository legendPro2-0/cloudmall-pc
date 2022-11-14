var express = require('express');
var controllerBanner = require('../controller/banner');
var router = express.Router();

/* GET users listing. */
router.delete('/bnupdate', controllerBanner.bnupdate);
router.get('/bnlist',controllerBanner.bnlist);
router.post('/bnset',controllerBanner.bnset);
module.exports = router;
