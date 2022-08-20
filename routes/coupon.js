var express = require("express");
var router = express.Router();
const couponController = require("../controllers/couponController");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", couponController.create);
router.post("/update", couponController.update);
router.post("/view", couponController.view);
router.get("/viewall", couponController.viewall);
router.post("/destroy", couponController.destroy);

module.exports = router;
