const knex = require('../../config/db');
const moment = require('moment-timezone');
const HttpError = require('../lib/utils/http-error');

const addToFavorites = async (body) => {
  if (
    body.user_id < 1 ||
    isNaN(body.user_id) ||
    body.product_id < 1 ||
    isNaN(body.product_id)
  ) {
    throw new HttpError(
      'Bad request. ID must be an integer and larger than 0',
      400,
    );
  }
  try {
    await knex('favorites').insert({
      user_id: body.user_id,
      product_id: body.product_id,
      created_at: moment(Date.now()).format(),
    });

    return {
      successful: true,
      message: 'Product was added to favorites.',
    };
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError('Something went wrong', 500);
  }
};

const deleteFromFavorites = async (userId, productId) => {
  console.log('delete');
  return knex('favorites')
    .where({ user_id: userId, product_id: productId })
    .del();
};

module.exports = {
  deleteFromFavorites,
  addToFavorites,
};
