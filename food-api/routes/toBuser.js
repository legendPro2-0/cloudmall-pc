var express = require('express');
var controllertoBuser = require('../controller/toBuser');
var router = express.Router();

/* GET users listing. */
router.post('/newuser', controllertoBuser.newuser);
router.get('/list',controllertoBuser.list);
router.put('/update',controllertoBuser.update);
router.delete('/delete',controllertoBuser.Delete);

module.exports = router;
