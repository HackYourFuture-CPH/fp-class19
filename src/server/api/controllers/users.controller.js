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

const getUsers = async () => knex('users');

const getUserById = async (id) => {
  if (!id) {
    throw new HttpError('Bad request. Id should be a number', 400);
  }

  try {
    const users = await knex('users')
      .select('users.id as id', 'full_name', 'email', 'mobile', 'address')
      .where({ id });
    if (users.length === 0) {
      throw new Error(`Specified ID does not existt`, 404);
    }
    return users;
  } catch (error) {
    return error.message;
  }
};

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
      throw new Error(
        // eslint-disable-next-line
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
  getUsers,
  getUserById,
};
