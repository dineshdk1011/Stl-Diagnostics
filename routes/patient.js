var express = require('express');
var router = express.Router();
const patientController = require('../controllers/patientController')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', patientController.create)
router.put('/update', patientController.update)
router.post('/view', patientController.view)
router.get('/viewall', patientController.viewall)
router.delete('/destroy', patientController.destroy)
router.post('/viewpatient', patientController.viewpatient)


module.exports = router;
