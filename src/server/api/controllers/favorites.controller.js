const knex = require('../../config/db');
const moment = require('moment-timezone');
const HttpError = require('../lib/utils/http-error');

const addToFavorites = async(body) => {
    if (
        body.user_id < 1 ||
        isNaN(body.user_id) ||
        body.product_id < 1 ||
        isNaN(body.product_id)
    ) {
        throw new HttpError(
            'Bad request. ID must be an integer and larger than 0',
            400,
        );
    }
    try {
        await knex('favorites').insert({
            user_id: body.user_id,
            product_id: body.product_id,
            created_at: moment(Date.now()).format(),
        });

        return {
            successful: true,
            message: 'Product was added to favorites.',
        };
    } catch (error) {
        if (error instanceof HttpError) {
            throw error;
        }
        throw new HttpError('Something went wrong', 500);
    }
};

const deleteFromFavorites = async(userId, productId) => {
    const reg = /^\d+$/;
    const id = parseInt(productId, 10);
    if (isNaN(id) || !reg.test(productId) || id < 1) {
        throw new HttpError(`Bad request. Id should be a number`, 400);
    }

    const favoriteToDelete = await knex('favorites')
        .where({ user_id: userId, product_id: id }).del();
    if (favoriteToDelete.length === 0) {
        throw new HttpError(`Bad request. userID or productID doesn't exist`, 404);
    }

};

module.exports = {
    deleteFromFavorites,
    addToFavorites,
};