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

const getProductById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const products = await knex('products')
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
      .where({ id });
    if (products.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return products;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getProducts,
  getProductById,
};
