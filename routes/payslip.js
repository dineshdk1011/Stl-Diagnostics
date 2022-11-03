var express = require('express');
var router = express.Router();
const payslipController = require('../controllers/payslipController')


router.post('/create', payslipController.create)
router.post('/update', payslipController.update)
router.post('/view', payslipController.view)
router.get('/viewall', payslipController.viewall)
router.post('/destroy', payslipController.destroy)
router.post('/viewbyemployee', payslipController.viewbyemployee)

module.exports = router;
