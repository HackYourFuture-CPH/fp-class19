const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getOrderById = async(id) => {
    if (!id) {
        throw new HttpError(
            'Bad request. Order ID must be an integer and larger than 0',
            400,
        );
    }
    try {
        const orders = await knex('orders AS o')
            .select(
                'o.id as orderId',
                'o.status as orderStatus',
                'o.created_at as orderDate',
                'o.user_id as userId',
                'p.id as productId',
                'oi.quantity',
                'p.name',
                'p.price',
                'p.color',
                'p.size',
                'p.picture',
                'p.stock_amount'
            )
            .join('order_items AS oi ', 'o.id', '=', 'oi.order_id')
            .join('products AS p', 'p.id', '=', 'oi.product_id')
            .where('o.id', '=', id);
        if (orders.length === 0) {
            throw new Error(
                `Order with the ID ${id} not found: `,
                404,
            );
        }
        return orders;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
    getOrderById,
};

