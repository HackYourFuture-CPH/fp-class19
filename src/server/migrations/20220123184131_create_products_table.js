exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
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
      .notNullable()
      .defaultTo('unknown');
    table
      .enum('size', ['unknown', 's', 'sm', 'm', 'l', 'xl', 'xxl'])
      .notNullable()
      .defaultTo('unknown');
    table.boolean('is_available').notNullable().defaultTo(false);
    table.integer('stock_amount').notNullable().defaultTo(0);
    table.boolean('is_on_discount').notNullable().defaultTo(false);
    table.integer('discount_percent').notNullable().defaultTo(0);
    table.string('picture').defaultTo('https://via.placeholder.com/500x500');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
