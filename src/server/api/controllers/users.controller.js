const knex = require('../../config/db');
const moment = require('moment-timezone');
const HttpError = require('../lib/utils/http-error');

const createUser = async(body) => {
    await knex('users').insert({
        uid: body.uid,
        full_name: body.full_name,
        email: body.email,
        mobile: body.mobile,
        address: body.address,
        zipcode: body.zipcode,
        city: body.city,
        country: body.country,
        created_at: moment(Date.now()).format(),
    });

    return {
        successful: true,
    };
};
const getUserById = async(uid) => {
    try {
        const user = await knex('users')
            .select('uid', 'full_name', 'email', 'mobile', 'address', 'city', 'country', 'zipcode')
            .where({ uid });
        if (user.length === 0) {
            throw new HttpError(`Specified ID does not exist`, 404);
        }
        return user;
    } catch (error) {
        if (error instanceof HttpError) {
            throw error;
        }
        throw new HttpError('Unexpected error', 500);
    }
};
const getUserFavorites = async(uid) => {
    if (!uid) {
        throw new HttpError('Invalid User ID', 400);
    }
    try {
        const favorites = await knex('favorites')
            .join('products', 'products.id', 'product_id')
            .select('products.*')
            .where({ uid })
            .distinct();
        /* if (favorites.length === 0) {
            throw new HttpError(
                `The favorite products for user ${user_id} is not found`,
                404,
            );
        } */
        return favorites;
    } catch (error) {
        if (error instanceof HttpError) {
            throw error;
        }
        throw new HttpError('Unexpected error', 500);
    }
};

const updateUser = async(userId, updatedUser) => {
    try {
        const updatedRows = await knex('users').where({ uid: userId }).update({
            full_name: updatedUser.full_name,
            mobile: updatedUser.mobile,
            address: updatedUser.address,
            city: updatedUser.city,
            country: updatedUser.country,
            zipcode: updatedUser.zipcode,
            updated_at: moment(Date.now()).format(),
        });

        const NO_ROWS_UPDATED = 0;
        if (updatedRows === NO_ROWS_UPDATED) {
            throw new HttpError(`User with ID: ${userId} not found`, 404);
        }
        return { message: `User with ID: ${userId} updated` };
    } catch (error) {
        if (error instanceof HttpError) {
            throw error;
        }
        throw new HttpError('Unexpected error', 500);
    }
};

module.exports = {
    createUser,
    getUserFavorites,
    getUserById,
    updateUser,
};