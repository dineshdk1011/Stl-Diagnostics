var express = require("express");
var router = express.Router();
const adminloginController = require("../controllers/adminloginController");

const { joiValidate } = require("../utility/validationHelper");
const userValidation = require("../controllers/Validators/userValidator");
const JOI_OPTIONS = { wantResponse: true };

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", adminloginController.create);
router.post("/update", adminloginController.update);
router.post("/view", adminloginController.view);
router.get("/viewall", adminloginController.viewall);
router.delete("/destroy", adminloginController.destroy);
router.post("/login", adminloginController.login);
router.post("/jwtvalidation", adminloginController.jwtvalidation);
router.post("/passwordchange", adminloginController.passwordchange);

module.exports = router;
