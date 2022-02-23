const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getOrdersByUserId = async (raw_user_id) => {
  const user_id = parseInt(raw_user_id, 10);

  if (isNaN(user_id) || user_id < 1) {
    throw new HttpError('The ID should be a number', 400);
  }
  try {
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
      throw new HttpError('The user ID you provided does not exist', 404);
    }

    return orders;
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError('Something went wrong', 500);
  }
};

module.exports = {
  getOrdersByUserId,
};
