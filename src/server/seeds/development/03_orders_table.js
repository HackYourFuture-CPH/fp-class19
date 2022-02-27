exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('orders')
        .del()
        .then(() =>
            // Inserts seed entries
            knex('orders').insert([{
                    id: 1,
                    uid: "TestUser1",
                    status: 'NEW',
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 2,
                    uid: "TestUser2",
                    status: 'NEW',
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 3,
                    uid: "TestUser3",
                    status: 'NEW',
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 4,
                    uid: "TestUser4",
                    status: 'NEW',
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 5,
                    uid: "TestUser5",
                    status: 'NEW',
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 6,
                    uid: "TestUser6",
                    status: 'NEW',
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 7,
                    uid: "TestUser7",
                    status: 'INPROGRESS',
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 8,
                    uid: "TestUser8",
                    status: 'CANCELLED',
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 9,
                    uid: "TestUser9",
                    status: 'NEW',
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
            ]),
        )
        .catch((error) => {
            console.error(error);
        });
};