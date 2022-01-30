exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id').unsigned().primary();
      table.string('full_name').notNullable();
      table.string('email').notNullable().unique();
      table.string('address').notNullable();
      table.string('zipcode').notNullable();
      table.string('city').notNullable();
      table.string('country').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    })
    .then(() => {
      console.log('Users Table is Created!');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
