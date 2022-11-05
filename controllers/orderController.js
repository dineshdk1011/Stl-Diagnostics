const models = require("../models");
const Order = models.Order;
const Centers = models.Centers;
const Employee = models.employee;
const Patient = models.Patient;

const create = async (req, res) => {
  const data = req.body;

  data["orderid"] = Math.floor(1000000 + Math.random() * 9000000);

  await Order.create(data)
    .then((data) => {
      res.json("Registration successful");
    })
    .catch((err) => {
      console.log(err);
      res.send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const viewall = async (req, res) => {
  await Order.findAll()
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

  await Order.findAll({ where: { userid: data } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const update = async (req, res) => {
  const value = req.body;
  const id = req.body.orderid;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Order.update(value, {
    where: {
      orderid: id,
    },
  })
    .then(() => {
      res.send("Updated Successfully");
    })
    .catch((err) => {
      console.log(err);
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

  await Order.destroy({
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

const viewbydate = async (req, res) => {
  const data = req.body.date;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Order.findAll({ where: { date: data } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const orderdetails = async (req, res) => {
  await Order.findAll()
    .then(async (data) => {
      if (data.length !== 0) {
        var alldata = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].employeeid !== null) {
            await Centers.findAll({
              where: { centertid: data[i].testcenter },
            }).then(async (centerdata) => {
              await Employee.findAll({
                where: { employeeid: data[i].employeeid },
              }).then(async (employeedata) => {
                await Patient.findAll({
                  where: { patientid: data[i].patientid },
                }).then((patientdata) => {
                  alldata.push({
                    order: data[i],
                    center: centerdata[0],
                    employee: employeedata[0],
                    patient: patientdata[0],
                  });
                });
              });
            });
          } else {
            await Centers.findAll({
              where: { centertid: data[i].testcenter },
            }).then(async (centerdata) => {
              await Patient.findAll({
                where: { patientid: data[i].patientid },
              }).then((patientdata) => {
                alldata.push({
                  order: data[i],
                  center: centerdata[0],
                  employee: [],
                  patient: patientdata[0],
                });
              });
            });
          }
        }
        res.send(alldata);
      } else {
        res.send([]);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};
const orderdetailsbyuser = async (req, res) => {
  const data = req.body.userid;
  await Order.findAll({ where: { userid: data } })
    .then(async (data) => {
      if (data.length !== 0) {
        var alldata = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].employeeid !== null) {
            await Centers.findAll({
              where: { centertid: data[i].testcenter },
            }).then(async (centerdata) => {
              await Employee.findAll({
                where: { employeeid: data[i].employeeid },
              }).then(async (employeedata) => {
                await Patient.findAll({
                  where: { patientid: data[i].patientid },
                }).then((patientdata) => {
                  alldata.push({
                    order: data[i],
                    center: centerdata[0],
                    employee: employeedata[0],
                    patient: patientdata[0],
                  });
                });
              });
            });
          } else {
            await Centers.findAll({
              where: { centertid: data[i].testcenter },
            }).then(async (centerdata) => {
              await Patient.findAll({
                where: { patientid: data[i].patientid },
              }).then((patientdata) => {
                alldata.push({
                  order: data[i],
                  center: centerdata[0],
                  employee: [],
                  patient: patientdata[0],
                });
              });
            });
          }
        }
        res.send(alldata);
      } else {
        res.send([]);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

module.exports = {
  create,
  viewall,
  view,
  update,
  destroy,
  viewbydate,
  orderdetails,
  orderdetailsbyuser,
};
