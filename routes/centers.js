var express = require('express');
var router = express.Router();
const centersController = require('../controllers/centersController')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', centersController.create)
router.post('/update', centersController.update)
router.post('/view', centersController.view)
router.get('/viewall', centersController.viewall)
router.delete('/destroy', centersController.destroy)

module.exports = router;
