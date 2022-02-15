const knex = require('../../config/db');
const moment = require('moment-timezone');
const HttpError = require('../lib/utils/http-error');

const newOrder = async (data) => {
  let orderId;
  await knex('orders')
    .insert({ user_id: data.user_id,
            created_at: moment(Date.now()).format(),
            status: 'created'})
    .returning('id')
    .then((id) => {
      [orderId] = id;
      data.items.forEach(async (item) => {
        await knex('order_items').insert({
          order_id: id[0],
          product_id: item.productId,
          quantity: item.quantity,
        });
      });
    });
  return orderId;
};

module.exports = {
  newOrder
};
