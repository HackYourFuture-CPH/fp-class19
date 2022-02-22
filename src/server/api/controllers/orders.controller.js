const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');


const getOrderById = async(id) => {
    if (isNaN(id) || id < 1) {
        throw new HttpError(
            'Bad request. Order ID must be an integer and larger than 0',
            400,
        );
    }
    try {
        const orders = await knex('orders AS o')
            .select(
                'o.id',
                'o.status',
                'o.created_at',
                'o.user_id',
                'oi.quantity',
                'p.id',
                'p.name',
                'p.picture',
                'p.stock_amount',
                'p.price',
            )
            .join('order_items AS oi', 'o.id', '=', 'oi.order_id')
            .join('products AS p', 'p.id', '=', 'oi.product_id')
            .where('o.id', '=', id);
        if (orders.length === 0) {
            throw new HttpError(
                `Order with the id of ${id} not found `,
                404,
            );
        }

        return orders;
    } catch (error) {
        if (error instanceof HttpError) {
            throw error;
        }

        throw new HttpError('Something went wrong', 500);
    }
};
module.exports = {
    getOrderById,
};