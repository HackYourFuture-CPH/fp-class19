const knex = require('../../config/db');
const moment = require('moment-timezone');

const addToFavorites = async (body) => {
  console.log('in add');
  await knex('favorites').insert({
    user_id: body.user_id,
    product_id: body.product_id,
    created_at: moment(Date.now()).format(),
  });

  return {
    successful: true,
  };
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
