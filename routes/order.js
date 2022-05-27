var express = require("express");
var router = express.Router();
const orderController = require("../controllers/orderController");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", orderController.create);
router.post("/update", orderController.update);
router.post("/view", orderController.view);
router.get("/viewall", orderController.viewall);
router.delete("/destroy", orderController.destroy);
router.post("/viewbydate", orderController.viewbydate);

module.exports = router;
