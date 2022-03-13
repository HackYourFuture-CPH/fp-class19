const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getFamilies = async () => knex('families');

const getFamilyById = async (idStr) => {
  const id = parseInt(idStr.trim(), 10);
  if (isNaN(id) || id < 1) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const families = await knex('families').where({ id });
    if (families.length === 0) {
      throw new HttpError(`incorrect entry with the id of ${id}`, 404);
    }
    return families;
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError('Something went wrong', 500);
  }
};
module.exports = {
  getFamilies,
  getFamilyById,
};
