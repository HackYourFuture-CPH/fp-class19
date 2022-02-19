exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.string('mobile', 128);
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('mobile');
  });
};
