const models = require("../models");
const Coupon = models.Coupon;

const create = async (req, res) => {
    const data = req.body;

    await Coupon.create(data)
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
    await Coupon.findAll()
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
    const data = req.body.id;

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    await Coupon.findAll({ where: { id: data } }).then((data) => {
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
    const id = req.body.id;


    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    await Coupon.update(value, {
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
    const data = req.body.id;

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    await Coupon.destroy({ where: { id: data } }).then(() => {
        res.send("Deleted Successfully");
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    });
};



module.exports = {
    create,
    viewall,
    view,
    update,
    destroy,
};
