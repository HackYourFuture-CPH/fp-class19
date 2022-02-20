exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orders')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('orders').insert([
        {
          id: 1,
          user_id: 1,
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 2,
          user_id: 2,
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 3,
          user_id: 3,
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 4,
          user_id: 4,
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 5,
          user_id: 5,
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 6,
          user_id: 1,
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 7,
          user_id: 2,
          status: 'INPROGRESS',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 8,
          user_id: 3,
          status: 'CANCELLED',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 9,
          user_id: 4,
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
      ]),
    )
    .catch((error) => {
      console.error(error);
    });
};
