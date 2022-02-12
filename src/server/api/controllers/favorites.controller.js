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

const deleteFromFavorites = async (user_id, product_id) => {
  console.log('delete');
  return knex('favorites')
    .where({ user_id: user_id, product_id: product_id })
    .del();
};

module.exports = {
  deleteFromFavorites,
  addToFavorites,
};
