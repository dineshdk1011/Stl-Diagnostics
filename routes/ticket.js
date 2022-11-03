var express = require('express');
var router = express.Router();
const ticketController = require('../controllers/ticketController')


router.post('/create', ticketController.create)
router.post('/update', ticketController.update)
router.post('/view', ticketController.view)
router.get('/viewall', ticketController.viewall)
router.post('/destroy', ticketController.destroy)

module.exports = router;
