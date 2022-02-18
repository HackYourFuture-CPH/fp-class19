const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const getProducts = async (req) => {
  let { limit, offset, sortKey, sortOrder } = req.query;

  let products = knex('products');

  if (!limit) {
    limit = 10;
  }

  if (!offset) {
    offset = 0;
  }

  if (!sortKey) {
    sortKey = 'name';
  }

  if (!sortOrder) {
    sortOrder = 'asc';
  }

  if (
    isNaN(limit) ||
    isNaN(offset) ||
    'asc desc'.indexOf(sortOrder) === -1 ||
    'price name'.indexOf(sortKey) === -1
  ) {
    throw new HttpError('Type or value of parameters is incorrect', 400);
  }

  products = products.limit(limit).offset(offset).orderBy(sortKey, sortOrder);

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
  getDiscountProducts,
  getProductById,
};
