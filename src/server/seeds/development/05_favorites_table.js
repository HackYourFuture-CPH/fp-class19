exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('favorites')
        .del()
        .then(() =>
            // Inserts seed entries
            knex('favorites').insert([{
                    id: 1,
                    uid: "2r49MqKfRNVUIcOOLPt9psmLYdi1",
                    product_id: 1,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 2,
                    uid: "COzFOvsO89X4x5RdRRVWoIIrqSo1",
                    product_id: 2,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 3,
                    uid: "EGG1VfsbUxRVBSuwJOKhJFesk8H3",
                    product_id: 3,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                },
                {
                    id: 4,
                    uid: "M8a2PB5qeISLegP11BBIblGtc8m2",
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