const knex = require('../../config/db');
// const HttpError = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const getProducts = async () => {
  return knex('products');
};

const getDiscountProducts = async () => {
  return knex('products').where('products.is_on_discount', '=', '1');
};

module.exports = {
  getProducts,
  getDiscountProducts,
};
