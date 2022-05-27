const Joi = require('joi');

exports.joiValidate = function (schema, options) {
    return function (req, res, next) {

        let result;

        if (schema.body) {
            //check the req body type
            if (!Array.isArray(req.body)) {
                let schemaBody = Joi.object(schema.body);
                result = schemaBody.validate(req.body);
                if (result.error) {
                    return responseHandler.error(res, result)

                }
            } else {
                let schemaBody = Joi.array().items(Joi.object(schema.body));
                result = schemaBody.validate(req.body);

                if (result.error) {
                    return responseHandler.error(res, result)
                }
            }

        }


        if (schema.query) {
            let schemaQuery = Joi.object(schema.query);
            result = schemaQuery.validate(req.query);

            if (result.error) {
                return responseHandler.error(res, result.error, result.error.message, 500);
            }
        }
        next();
    }
}