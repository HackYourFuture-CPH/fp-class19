const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const moment = require('moment-timezone');



const newOrder = async({ user_id, items }) => {
    const userId = parseInt(user_id, 10);
    if (isNaN(userId) || userId < 1) {
        throw new HttpError(
            'Bad request. User ID must be an integer and larger than 0',
            400,
        );
    }
    try {
        const orderId = await knex('orders')
            .insert({
                user_id,
                created_at: moment(Date.now()).format(),
                status: 'NEW',
            })
            .returning('id');

        console.log({ orderId })

        items.forEach(async(item) => {
            console.log({ item })
            await knex('order_items').insert({
                order_id: orderId[0],
                product_id: item.product_id,
                quantity: item.quantity,
            });
        });


        if (items.length === 0) {
            throw new HttpError(
                `Order with the user id of ${userId} not found `,
                404,
            );
        }

        return {
            success: true
        };
    } catch (error) {
        if (error instanceof HttpError) {
            throw error;
        }

        throw new HttpError('Something went wrong', 500);
    }
}
module.exports = {
    newOrder
};