exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('favorites')
        .del()
        .then(() =>
            // Inserts seed entries
            knex('favorites').insert([{
                    id: 1,
                    uid: "TestUser1",
                    product_id: 1,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 2,
                    uid: "TestUser2",
                    product_id: 2,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 3,
                    uid: "TestUser3",
                    product_id: 3,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 4,
                    uid: "TestUser4",
                    product_id: 4,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
            ]),
        )
        .catch((error) => {
            console.error(error);
        });
};