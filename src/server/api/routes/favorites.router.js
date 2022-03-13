const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const favoritesController = require('../controllers/favorites.controller');

/**
 * @swagger
 * /favorites/add:
 *  post:
 *    tags:
 *    - Favorites
 *    summary: Add a product to favorites of a user
 *    description:
 *      Will add a product to favorites of a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: favorite
 *
 *        description: The product to add in favorites of a user.
 *        schema:
 *          type: object
 *          example:
 *            {"uid":"string",
 *             "product_id":3}
 *          properties:
 *             uid:
 *               type: string
 *             product_id:
 *               type: integer
 *
 *    responses:
 *      200:
 *        description: added to favorites
 *      400:
 *        description: Bad Request. UID must be a string'.
 *      5xx:
 *        description: Unexpected error.
 *
 */
router.post('/add', (req, res, next) => {
    favoritesController
        .addToFavorites(req.body)
        .then((result) => res.json(result))
        .catch((next))
});

/**
 * @swagger
 * /favorites:
 *  delete:
 *    tags:
 *    - Favorites
 *    summary: Delete a favorite product for a user
 *    description:
 *      Will delete a favorite product of a user.
 *    produces: application/json
 *    parameters:
 *      - in: query
 *        name: uid
 *        type: string
 *        description: ID of the user to delete.
 *      - in: query
 *        name: product_id
 *        type: integer
 *        description: ID of the product to delete.
 *    responses:
 *      200:
 *        description: Product deleted for a user from favorites
 *      400:
 *        description: Bad request. uId should be a string
 *      404:
 *        description: Bad request. userID or productID doesn't exist
 *      
 *
 */
router.delete('/', (req, res, next) => {
    favoritesController
        .deleteFromFavorites(req.query.uid, req.query.product_id)
        .then((result) => res.json(result))
        .catch(next);
});
module.exports = router;