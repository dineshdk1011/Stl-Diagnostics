const models = require("../models");
const Patient = models.Patient;

const create = async (req, res) => {
  const data = req.body;
  data["patientid"] = Math.floor(1000000 + Math.random() * 9000000);
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  await Patient.create(data)
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
  await Patient.findAll()
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
  const data = req.body.patientid;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Patient.findAll({ where: { patientid: data } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const viewpatient = async (req, res) => {
  const data = req.body.patientid;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Patient.findAll({ where: { patientid: data } })
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

  await Patient.update(value, {
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

  await Patient.destroy({
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

module.exports = {
  create,
  viewall,
  view,
  update,
  destroy,
  viewpatient,
};
