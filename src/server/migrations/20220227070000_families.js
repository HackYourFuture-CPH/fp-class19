exports.up = function (knex) {
  return knex.schema.createTable('families', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('families');
};
