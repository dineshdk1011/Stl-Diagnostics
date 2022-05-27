var express = require("express");
var router = express.Router();
const employeeController = require("../controllers/employeeController");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", employeeController.create);
router.put("/update", employeeController.update);
router.post("/view", employeeController.view);
router.get("/viewall", employeeController.viewall);
router.delete("/destroy", employeeController.destroy);
router.post("/viewpatient", employeeController.viewemployee);
router.post("/login", employeeController.login);

module.exports = router;
