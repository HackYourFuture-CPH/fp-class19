const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getProducts = async(req) => {
    let { limit, offset, sortKey, sortOrder } = req.query;
    const allowedSortKeys = new Set(['name', 'price']);
    const allowedSortOrders = new Set(['asc', 'desc']);

    limit = limit || 10;

    offset = offset || 0;

    sortKey = sortKey || 'name';

    sortOrder = sortOrder || 'asc';

    const invalidParams =
        isNaN(limit) ||
        limit <= 0 ||
        isNaN(offset) ||
        offset < 0 ||
        !allowedSortKeys.has(sortKey) ||
        !allowedSortOrders.has(sortOrder);

    if (invalidParams) {
        throw new HttpError('Type or value of parameters is incorrect', 400);
    }

    try {
        const totalCount = (
            await knex('products').count('id', { as: 'count' }).first()
        ).count;
        const products = await knex('products')
            .limit(limit)
            .offset(offset)
            .orderBy(sortKey, sortOrder);

        return {
            totalCount,
            items: products,
        };
    } catch (error) {
        return error.message;
    }
};

const getDiscountProducts = async() => {
    try {
        const productsOnDiscount = await knex('products')
            .select(
                'id',
                'name',
                'price',
                'color',
                'size',
                'is_available',
                'stock_amount',
                'is_on_discount',
                'discount_percent',
                'picture',
            )
            .where('products.is_on_discount', '=', '1');
        if (productsOnDiscount.length === 0) {
            throw new HttpError('There are no products with discount', 404);
        }
        return productsOnDiscount;
    } catch (error) {
        if (error instanceof HttpError) {
            throw error;
        }
        throw new HttpError('Unexpected error', 500);
    }
};

const getProductById = async(product_id) => {
    const NUMBER_REGEXP = /^\d+$/g;
    const id = parseInt(product_id, 10);
    if (typeof product_id === 'string' && !product_id.match(NUMBER_REGEXP)) {
        throw new HttpError('Bad request, Invalid id', 400);
    }
    try {
        const product = await knex('products')
            .select(
                'id',
                'name',
                'price',
                'color',
                'size',
                'is_available',
                'stock_amount',
                'is_on_discount',
                'discount_percent',
                'picture',
            )
            .where({ id });
        if (product.length === 0) {
            throw new HttpError(`Product with id ${id} doesn't exist`, 404);
        }
        return product[0];
    } catch (error) {
        if (error instanceof HttpError) {
            throw error;
        }

        throw new HttpError('Unexpected error', 500);
    }
};

module.exports = {
    getProducts,
    getDiscountProducts,
    getProductById,
};