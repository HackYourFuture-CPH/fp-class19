exports.up = function(knex) {
    return knex.schema
        .createTable('orders', (table) => {
            table.increments();
            table
                .string('uid')
                .notNullable()
                .references('users.uid')
                .onDelete('CASCADE');
            table
                .enu('status', ['NEW', 'INPROGRESS', 'COMPLETED', 'CANCELLED'])
                .notNullable()
                .defaultTo('NEW');
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
            table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        })
        .then(() => {
            console.log('Orders Table is Created!');
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders');
};