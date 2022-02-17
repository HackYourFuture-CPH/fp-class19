const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getOrderByUserId = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const orders = await knex
      .select('created_at')
      .from('orders')
      .join('order_items', 'order_items.order_id', '=', 'orders.id')
      .where({ user_id: id });
    return orders;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getOrderByUserId,
};
