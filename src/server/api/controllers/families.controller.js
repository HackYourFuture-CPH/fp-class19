const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getFamilies = async () => knex('families');


const getFamilyById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const families = await knex('families').where({ id });
    if (families.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return families;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getFamilies,
  getFamilyById,
};
