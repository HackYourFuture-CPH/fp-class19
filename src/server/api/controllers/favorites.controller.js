const knex = require('../../config/db');
const moment = require('moment-timezone');
//const HttpError = require('../lib/utils/http-error');

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

const deleteFromFavorites = async (body) => {
  console.log('delete');
  await knex('favorites')
    .where({ user_id: body.user_id, product_id: body.product_id })
    .del();
};

module.exports = {
  deleteFromFavorites,
  addToFavorites,
};
