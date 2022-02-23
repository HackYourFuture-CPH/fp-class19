const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

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

const getDiscountProducts = async() => knex('products')
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

const getProductById = async(prod_id) => {
    const id = parseInt(prod_id, 10);
    if (isNaN(prod_id) || id < 1) {
        throw new HttpError('Bad request, Invalid id', 400);
    } else {
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
                throw new HttpError(`Product with id ${id} doesn't exist`,
                    404);
            } else {
                return product;
            }

        } catch (error) {
            if (error instanceof HttpError) {
                throw error;
            }
        }
    }
};

module.exports = {
    getProducts,
    getDiscountProducts,
    getProductById,
};