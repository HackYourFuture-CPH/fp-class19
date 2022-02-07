const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const getProducts = async (req) => {
  let products = knex('products');
  const { limit, offset } = req.query;

  if (!limit && !offset) {
    return products;
  }

  if (limit && offset) {
    products = products.limit(limit).offset(offset);
  }

  if (isNaN(limit) || isNaN(offset)) {
    throw new HttpError('Limit and offset should be a number', 400);
  }

  return products;
};

module.exports = {
  getProducts,
};
