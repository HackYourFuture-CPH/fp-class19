const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const getOrderByUserId = async (user_id) => {
  try {
    if (isNaN(user_id)) {
      throw new HttpError('The ID should be a number', 400);
    }
    const orders = await knex('orders')
      .select(
        'orders.user_id',
        'orders.id as order_number',
        'orders.updated_at',
        knex.raw('sum( ?? * ?? ) as ??', ['quantity', 'price', 'total_amount']),
      )

      .leftJoin('order_items', 'order_items.order_id', '=', 'orders.id')
      .leftJoin('users', 'users.id', '=', 'orders.user_id')
      .leftJoin('products', 'products.id', '=', 'order_items.product_id')
      .where({ user_id })
      .groupBy('orders.id')
      .count('orders.id as nr_of_items');

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
