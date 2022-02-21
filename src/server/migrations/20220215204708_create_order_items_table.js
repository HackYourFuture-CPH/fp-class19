exports.up = function (knex) {
  return knex.schema.createTable('order_items', (table) => {
    table.increments();
    table
      .integer('order_id')
      .notNullable()
      .unsigned()
      .references('orders.id')
      .onDelete('CASCADE');
    table
      .integer('product_id')
      .notNullable()
      .unsigned()
      .references('products.id')
      .onDelete('CASCADE');
    table.integer('quantity').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('order_items');
};
