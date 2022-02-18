/* eslint-disable prefer-arrow-callback */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orders')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {
          user_id: 1,
          created_at: knex.fn.now(),
          status: 'NEW',
        },
        {
          user_id: 2,
          created_at: knex.fn.now(),
          status: 'INPROGRESS',
        },
        {
          user_id: 3,
          created_at: knex.fn.now(),
          status: 'CANCELLED',
        },
        {
          user_id: 4,
          created_at: knex.fn.now(),
          status: 'NEW',
        },
      ]);
    });
};
