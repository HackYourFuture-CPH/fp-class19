exports.up = function (knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.integer('user_id').notNullable().unsigned().references('users.id');
    table
      .integer('product_id')
      .notNullable()
      .unsigned()
      .references('products.id');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.primary(['product_id', 'user_id']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('favorites');
};
