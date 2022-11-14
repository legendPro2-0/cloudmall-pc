var express = require('express');
var controllerUser = require('../controller/shops');
var router = express.Router();
let multer = require('multer');
let upload = multer({ dest: './public/uploads/' });

/* GET users listing. */
router.post('/update', upload.single('file'), controllerUser.update);
router.get('/list', controllerUser.list);

module.exports = router;