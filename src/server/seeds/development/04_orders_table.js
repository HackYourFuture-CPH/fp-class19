exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orders')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('orders').insert([
        {
          id: 1,
          uid: '2r49MqKfRNVUIcOOLPt9psmLYdi1',
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 2,
          uid: 'COzFOvsO89X4x5RdRRVWoIIrqSo1',
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 3,
          uid: 'EGG1VfsbUxRVBSuwJOKhJFesk8H3',
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 4,
          uid: 'M8a2PB5qeISLegP11BBIblGtc8m2',
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 5,
          uid: 'QsZkAedqMtQqzmroSbepMVItWcD2',
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 6,
          uid: 'Y2Xp4nTaBAOsuF7qNF28l0wMHPh1',
          status: 'NEW',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 7,
          uid: 'V4N82jkT41SBZ3eJLUQmFuPkS5B3',
          status: 'INPROGRESS',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 8,
          uid: 'UZT9cILzlZN7futPPsgbY7nK7p32',
          status: 'CANCELLED',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        },
        {
          id: 9,
          uid: 'U5Y1mDsFgQhVuslWonSPRdB1Fkk1',
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
