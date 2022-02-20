exports.up = function (knex) {
  return knex.schema
    .createTable('orders', (table) => {
      table.increments('id').unsigned().primary();
      table.integer('user_id').notNullable().unsigned().references('users.id');
      table
        .enu('status', ['NEW', 'INPROGRESS', 'COMPLETED', 'CANCELLED'])
        .notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    })
    .then(() => {
      console.log('Orders Table is Created!');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('orders');
};
