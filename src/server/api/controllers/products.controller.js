const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const getProducts = async (req) => {
  try {
    let { limit, offset, sortKey, sortOrder } = req.query;

    limit = limit || 10;

    offset = offset || 0;

    sortKey = sortKey || 'name';

    sortOrder = sortOrder || 'asc';

    const invalidParams = isNaN(limit) || isNaN(offset);

    if (invalidParams) {
      throw new HttpError('Type or value of parameters is incorrect', 400);
    }

    const products = knex('products')
      .limit(limit)
      .offset(offset)
      .orderBy(sortKey, sortOrder);

    return products;
  } catch (error) {
    return error.message;
  }
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
