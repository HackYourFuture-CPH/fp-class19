const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const addToFavorites = async (body) => {
  if (
    // body.user_id < 1 ||
    // isNaN(body.user_id) ||
    body.product_id < 1 ||
    isNaN(body.product_id)
  ) {
    throw new HttpError(
      'Bad request. ID must be an integer and larger than 0 and uid must be string',
      400,
    );
  }
  try {
    await knex('favorites').insert({
      uid: body.uid,
      product_id: body.product_id,
      created_at: knex.fn.now(),
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

const deleteFromFavorites = async (uid, productId) => {
  const reg = /^\d+$/;
  const id = parseInt(productId, 10);
  if (isNaN(id) || !reg.test(productId) || id < 1) {
    throw new HttpError(`Bad request. Id should be a number`, 400);
  }
  console.log(uid);
  console.log(id);

  const favoriteToDelete = await knex('favorites')
    .where({ uid, product_id: id })
    .del();

  if (favoriteToDelete.length === 0) {
    throw new HttpError(`Bad request. userID or productID doesn't exist`, 404);
  }
  return {
    successful: true,
    message: 'Product was added to favorites.',
  };
};

module.exports = {
  deleteFromFavorites,
  addToFavorites,
};
