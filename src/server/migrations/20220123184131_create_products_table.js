exports.up = function (knex) {
  return knex.schema.createTable('products', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.integer('price').notNullable();
    table
      .enum('color', [
        'unknown',
        'white',
        'yellow',
        'red',
        'green',
        'blue',
        'purple',
        'pink',
        'orange',
      ])
      .defaultTo('unknown');
    table
      .enum('size', ['unknown', 's', 'sm', 'm', 'l', 'xl', 'xxl'])
      .defaultTo('unknown');
    table.boolean('is_available').defaultTo(false);
    table.integer('stock_amount').defaultTo(0);
    table.boolean('is_on_discount').defaultTo(false);
    table.integer('discount_percent').defaultTo(0);
    table.string('picture').defaultTo('https://via.placeholder.com/500x500');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
