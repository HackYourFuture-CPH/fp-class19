exports.up = function (knex) {
  return knex.schema.createTable('families', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
     })
    .then(() => {
      console.log('Families Table is Created!');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('families');
};
