exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('order_items')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('order_items').insert([
        {
          order_id: 1,
          product_id: 1,
          quantity: 1,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          order_id: 2,
          product_id: 2,
          quantity: 2,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          order_id: 3,
          product_id: 3,
          quantity: 3,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          order_id: 4,
          product_id: 4,
          quantity: 4,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          order_id: 5,
          product_id: 5,
          quantity: 5,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]),
    )
    .catch((error) => {
      console.error(error);
    });
};
