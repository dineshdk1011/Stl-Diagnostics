var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var adminloginRouter = require("./routes/adminloginRouter");
var patientRouter = require("./routes/patient");
var employeeRouter = require("./routes/employee");
var centersRouter = require("./routes/centers");
var testRouter = require("./routes/test");
var orderRouter = require("./routes/order");
var cartRouter = require("./routes/cart");
var razorpayRouter = require("./routes/razorpay");
var couponRouter = require("./routes/coupon");

var app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/adminloginRouter", adminloginRouter);
app.use("/patient", patientRouter);
app.use("/employee", employeeRouter);
app.use("/centers", centersRouter);
app.use("/test", testRouter);
app.use("/order", orderRouter);
app.use("/cart", cartRouter);
app.use("/razorpay", razorpayRouter);
app.use("/coupon", couponRouter);



global.responseHandler = require("./config/responseHandler");

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
