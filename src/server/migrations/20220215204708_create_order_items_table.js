exports.up = function (knex) {
  return knex.schema.createTable('order_items', (table) => {
    table.integer('order_id').notNullable().unsigned().references('orders.id');
    table
      .integer('product_id')
      .notNullable()
      .unsigned()
      .references('products.id');
    table.integer('quantity').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('order_items');
};
