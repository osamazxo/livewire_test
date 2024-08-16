const joi = require("joi");

const getProductsSchema = joi
  .object({
    search: joi.string(),
    sort: joi.string(),
    page: joi.number().min(0),
  })
  .required();

const addProductSchema = joi
  .object({
    name: joi.string().min(4).max(120).required(),
    price: joi.number().min(0).required(),
  })
  .required();

exports.getProductsSchema = getProductsSchema;
exports.addProductSchema = addProductSchema;
