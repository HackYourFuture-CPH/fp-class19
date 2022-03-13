exports.seed = function (knex) {
  return knex('families')
    .del()
    .then(() => knex('families').insert([
        {
          id: 1,
          name: 'Asteraceae',
          created_at: '2022-02-27 00:00:00',
        },
        {
          id: 2,
          name: 'Rosaceae',
          created_at: '2022-02-27 00:00:00',
        },
        {
          id: 3,
          name: 'Iridaceae',
          created_at: '2022-02-27 00:00:00',
        },
        {
          id: 4,
          name: 'Scrophulariaceae',
          created_at: '2022-02-27 00:00:00',
        },
        {
          id: 5,
          name: 'Saxifragaceae',
          created_at: '2022-02-27 00:00:00',
        },
        {
          id: 6,
          name: 'Crassulaceae',
          created_at: '2022-02-27 00:00:00',
        },
        {
          id: 7,
          name: 'Euphorbiaceae',
          created_at: '2022-02-27 00:00:00',
        },
        {
          id: 8,
          name: 'Lamiaceae',
          created_at: '2022-02-27 00:00:00',
        },
      ])
    );
};
