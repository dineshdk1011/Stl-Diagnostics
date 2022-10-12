var express = require('express');
var router = express.Router();
const patientController = require('../controllers/patientController')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', patientController.create)
router.post('/update', patientController.update)
router.post('/view', patientController.view)
router.get('/viewall', patientController.viewall)
router.post('/destroy', patientController.destroy)
router.post('/viewpatient', patientController.viewpatient)


module.exports = router;
