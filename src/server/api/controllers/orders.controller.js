const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getOrderByUserId = async (user_id) => {
  try {
    if (isNaN(user_id)) {
      throw new HttpError('The ID should be a number', 400);
    }
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

    if (orders.length === 0) {
      throw new Error(`incorrect entry with the id of ${user_id}`, 404);
    }
    return orders;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getOrderByUserId,
};
