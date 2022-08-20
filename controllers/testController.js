const models = require('../models');
const Test = models.Test
const Centers = models.Centers

const create = async (req, res) => {
    try {
        const data = req.body;
        data["testtid"] = Math.floor(1000000 + Math.random() * 9000000)
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        await Test.create(data).then(data => {
            res.json("Registration successful");
        }).catch(err => {
            res.send({
                message:
                    err.message || "Some error occurred in query."
            })
        });
    } catch (err) {
        res.send({
            message:
                err.message || "Some error occurred in query."
        })
    }
}

const viewall = async (req, res) => {
    try {
        await Test.findAll().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred in query."
            })
        });
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    }
}

const view = async (req, res) => {
    try {
        const data = req.body.centertid;
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        await Test.findAll({ where: { centerid: data } }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred in query."
            })
        });
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    }
}

const viewsingle = async (req, res) => {
    try {
        const data = req.body.testtid;
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        await Test.findAll({ where: { testtid: data } }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred in query."
            })
        });
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    }
}

const update = async (req, res) => {
    try {
        const value = req.body;
        const id = req.body.id
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        await Test.update(value, {
            where: {
                id: id
            }
        }).then(() => {
            res.send("Updated Successfully");
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred in query."
            })
        });
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    }
}

const destroy = async (req, res) => {
    const data = req.body.id;

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    await Test.destroy({ where: { id: data } }).then(() => {
        res.send("Deleted Successfully");
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    });
}

const viewtestcenter = async (req, res) => {
    try {
        const data = req.body.testtid;
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        await Test.findAll({ where: { testtid: data } }).then(async data => {
            if (data[0].centerid !== null) {
                var centersid = data[0].centerid.split(",")
                var allcenter = []
                for (var i = 0; i < centersid.length; i++) {
                    await Centers.findAll({ where: { centertid: centersid[i] } }).then(data => {
                        allcenter.push(data[0])
                    })
                }
                res.send(allcenter);
            }

        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred in query."
            })
        });
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    }
}

const viewcentertest = async (req, res) => {
    try {
        const data = req.body.centertid;
        var alldata = await Test.findAll()
        var alltestdata = []
        for (var i = 0; i < alldata.length; i++) {
            var centersid = alldata[i].centerid.split(",")
            for (var j = 0; j < centersid.length; j++) {
                if (centersid[j] === data) {
                    alltestdata.push(alldata[i])
                }
            }
        }
        res.send(alltestdata)
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred in query."
        })
    }
}

module.exports = {
    create,
    viewall,
    view,
    update,
    destroy,
    viewsingle,
    viewtestcenter,
    viewcentertest
}