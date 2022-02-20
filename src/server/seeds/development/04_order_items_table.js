/* eslint-disable prefer-arrow-callback */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('order_items')
    .del()
    .then(()=> 
      // Inserts seed entries
       knex('order_items').insert([
        {
          order_id: 1,
          product_id: 1,
          quantity: 4,
        },
        {
          order_id: 2,
          product_id: 2,
          quantity: 1,
        },
        {
          order_id: 3,
          product_id: 7,
          quantity: 2,
        },
        {
          order_id: 4,
          product_id: 20,
          quantity: 3,
        },
        {
          order_id: 1,
          product_id: 4,
          quantity: 3,
        },
        {
          order_id: 3,
          product_id: 6,
          quantity: 2,
        },
        {
          order_id: 3,
          product_id: 12,
          quantity: 3,
        },
      ])
    );
};
