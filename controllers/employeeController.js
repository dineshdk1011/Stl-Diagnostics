const models = require("../models");
const Employee = models.employee;
const Order = models.Order;
const bcrypt = require("bcryptjs");
const secret = "4641316895";
const jwt = require("jsonwebtoken");
const moment = require('moment')
const Patient = models.Patient

const create = async (req, res) => {
  const data = req.body;
  var salt = bcrypt.genSaltSync(10);

  var hash = bcrypt.hashSync(req.body.password, salt);
  data["password"] = hash;

  data["employeeid"] = Math.floor(1000000 + Math.random() * 9000000);
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  await Employee.create(data)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const viewall = async (req, res) => {
  await Employee.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const view = async (req, res) => {
  const data = req.body.userid;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Employee.findAll({ where: { employeeid: data } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const viewemployee = async (req, res) => {
  const data = req.body.patientid;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Employee.findAll({ where: { patientid: data } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const update = async (req, res) => {
  const value = req.body.value;
  const id = req.body.id;
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Employee.update(value, {
    where: {
      id: id,
    },
  })
    .then(() => {
      res.send("Updated Successfully");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const destroy = async (req, res) => {
  const data = req.body;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Employee.destroy({
    where: data,
  })
    .then(() => {
      res.send("Deleted Successfully");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};
const login = async (req, res) => {
  console.log(req.body.email, req.body.password)
  try {
    let user = await Employee.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      let passwordresult = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (passwordresult == true) {
        let token = jwt.sign({ userid: user.userid }, secret, {
          expiresIn: "8h",
        });
        res.json({
          status: 200,
          message: "SUCCESS",
          data: { token, user },
        });
      } else {
        res.json({
          status: 400,
          message: "Wrong Password.. Please Check",
        });
      }
    } else {
      res.json({
        status: 400,
        message: "User Not Found.. Please Check",
      });
    }
  } catch (err) {
    res.json({
      status: 500,
      message: "Some error occurred in query",
    });
  }
};
const allappointment = async (req, res) => {

  try {
    var employeeid = req.body.employeeid
    var date = moment().format("DD-MM-YYYY")
    var time = moment().format("hh:mm A")
    await Order.findAll({ where: { employeeid: employeeid } }).then((data) => {
      if (data.length !== 0) {
        var upcommingdata = []
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].slot , time)
          if (data[i].date > date) {
            upcommingdata.push(data[i])
          } else if (data[i].date == date && data[i].slot > time) {
            upcommingdata.push(data[i])
          }
        }
        res.send(upcommingdata);
      }
    })
  } catch (error) {

  }
}
module.exports = {
  create,
  viewall,
  view,
  update,
  destroy,
  viewemployee,
  login,
  allappointment
};
