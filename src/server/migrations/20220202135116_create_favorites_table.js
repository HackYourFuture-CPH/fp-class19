exports.up = function (knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments();
    table
      .string('uid')
      .notNullable()
      .references('users.uid')
      .onDelete('CASCADE');
    table
      .integer('product_id')
      .notNullable()
      .unsigned()
      .references('products.id')
      .onDelete('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('favorites');
};
