const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getOrderByUserId = async (user_id) => {
  if (!user_id) {
    throw new HttpError('Id should be a number', 400);
  }

  try {
    const orders = await knex('order_items')
      .select(
        'orders.user_id',
        'order_items.order_id',
        'order_items.product_id',
        'order_items.quantity',
      )
      .join('orders', 'orders.id', '=', 'order_items.order_id')
      .join('users', 'users.id', '=', 'orders.user_id')
      .where({ user_id });
    return orders;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getOrderByUserId,
};
