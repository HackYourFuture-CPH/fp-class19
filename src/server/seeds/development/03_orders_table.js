/* eslint-disable prefer-arrow-callback */
exports.seed = function(knex) {
    return knex('order_items').del()
    .then(()=> 
    // Deletes ALL existing entries
     knex('orders')
        .del()
        .then(()=> 
            // Inserts seed entries
             knex('orders').insert([{
                    id:1,
                    user_id: 1,
                    created_at: knex.fn.now(),
                    status: 'NEW',
                },
                {
                    id:2,
                    user_id: 2,
                    created_at: knex.fn.now(),
                    status: 'INPROGRESS',
                },
                {
                    id:3,
                    user_id: 3,
                    created_at: knex.fn.now(),
                    status: 'CANCELLED',
                },
                {
                    id:4,
                    user_id: 4,
                    created_at: knex.fn.now(),
                    status: 'NEW',
                },
            ]),
        ));
    

};
