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

const getDiscountProducts = async () => {
  return knex('products')
    .select(
      'id',
      'name',
      'price',
      'color',
      'size',
      'is_available',
      'stock_amount',
      'is_on_discount',
      'discount_percent',
      'picture',
    )
    .where('products.is_on_discount', '=', '1');
};

module.exports = {
  getProducts,
  getDiscountProducts,
};
