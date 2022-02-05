const knex = require('../../config/db');
const moment = require('moment-timezone');

const createUser = async (body) => {
  await knex('users').insert({
    full_name: body.full_name,
    email: body.email,
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

module.exports = {
  createUser,
};
