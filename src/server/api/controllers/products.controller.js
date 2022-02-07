const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const getProducts = async () => {
  return knex('products');
};

const getProductById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const products = await knex('products').select('products.*').where({ id });
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
