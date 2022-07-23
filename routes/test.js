var express = require('express');
var router = express.Router();
const testController = require('../controllers/testController')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', testController.create)
router.post('/update', testController.update)
router.post('/view', testController.view)
router.post('/viewsingle', testController.viewsingle)
router.post('/viewtestcenter', testController.viewtestcenter)
router.post('/viewcentertest', testController.viewcentertest)
router.get('/viewall', testController.viewall)
router.post('/destroy', testController.destroy)

module.exports = router;
