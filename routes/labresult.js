var express = require('express');
var router = express.Router();
const labresulController = require('../controllers/labresultController')


router.post('/create', labresulController.create)
router.post('/update', labresulController.update)
router.post('/view', labresulController.view)
router.get('/viewall', labresulController.viewall)
router.post('/destroy', labresulController.destroy)

module.exports = router;
