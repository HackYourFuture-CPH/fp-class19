const knex = require('../../config/db');
const moment = require('moment-timezone');
const HttpError = require('../lib/utils/http-error');

const createUser = async (body) => {
  await knex('users').insert({
    full_name: body.full_name,
    email: body.email,
    mobile: body.mobile,
    address: body.address,
    zipcode: body.zipcode,
    city: body.city,
    country: body.country,
    created_at: moment(Date.now()).format(),
  });
  return {
    successful: true,
  };
};
const getUserById = async (user_id) => {
  const id = +user_id;
  if (isNaN(id) || id < 1) {
    throw new HttpError('Bad request. Id should be a number', 400);
  }
  try {
    const users = await knex('users')
      .select('users.id as id', 'full_name', 'email', 'mobile', 'address')
      .where({ id });
    if (users.length === 0) {
      throw new HttpError(`Specified ID does not exist`, 404);
    }
    return users;
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError('Unexpected error', 500);
  }
};
const getUserFavorites = async (user_id) => {
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
      throw new HttpError(
        `The favorite products for user ${user_id} is not found`,
        404,
      );
    }
    return favorites;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  createUser,
  getUserFavorites,
  getUserById,
};
