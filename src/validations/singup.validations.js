const Joi = require('joi');

const schema = Joi.object({
    nit: Joi.string().alphanum().required()
})

export default schema;