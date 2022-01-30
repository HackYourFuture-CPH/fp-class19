exports.up = function (knex) {
  return knex.schema.createTable('order_items', (table) => {
    table.increments();
    //  table.integer('order_id').notNullable().references("id").inTable("orders").onDelete("CASCADE");
    table.integer('order_id').notNullable();
    table.integer('product_id').notNullable();
    table.integer('quantity').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('order_items');
};
