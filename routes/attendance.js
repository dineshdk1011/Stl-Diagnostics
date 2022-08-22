var express = require('express');
var router = express.Router();
const attendanceController = require('../controllers/attendanceController')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', attendanceController.create)
router.post('/update', attendanceController.update)
router.post('/view', attendanceController.view)
router.get('/viewall', attendanceController.viewall)
router.post('/destroy', attendanceController.destroy)

module.exports = router;
