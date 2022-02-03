const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

// eslint-disable-next-line
const getUserFavorites = async (user_id) => {
  // eslint-disable-next-line
  if (!user_id) {
    throw new HttpError('User id should be a number', 400);
  }

  try {
    const favorites = await knex('favorites')
      .join('products', 'products.id', 'product_id')
      .select('products.*')
      .where({ user_id })
      .distinct();
    if (favorites.length === 0) {
      // eslint-disable-next-line
      throw new Error(
        `The favorite products for user ${user_id} did not found`,
        404,
      );
    }
    return favorites;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUserFavorites,
};
