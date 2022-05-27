const Joi = require("joi");

module.exports.login = {
  body: {
    email: Joi.string().email({ minDomainSegments: 2 }).optional(),
    password: Joi.string().min(1).required(),
    phone: Joi.number().min(10).optional(),
  },
};
module.exports.register = {
  body: {
    name: Joi.string().min(1).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(1).required(),
    phone: Joi.string().min(10).required(),
    gender: Joi.string().min(1).optional(),
    address: Joi.string().min(1).optional(),
  },
};
