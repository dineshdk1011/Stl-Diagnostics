var express = require("express");
var router = express.Router();
var Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: "rzp_test_p2fIXj2Ygz7phw",
  key_secret: "bfxmhO9bbHpZzP3Df5ncdWas",
});

/* GET users listing. */
router.post("/create", async function (req, res, next) {
  const { amount } = req.body;

  var params = await {
    amount: Number(amount) * 100,
    currency: "INR",
    receipt: "su001",
    payment_capture: "1",
  };
  await instance.orders
    .create(params)
    .then((data) => {
      return res.send({ sub: data, status: "success" });
    })
    .catch((error) => {
      console.log(error, "Razorpay");
      return res.send({ sub: error, status: "failed" });
    });
});

module.exports = router;
