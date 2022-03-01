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
 *            {"user_id":2,
 *             "product_id":3}
 *          properties:
 *             user_id:
 *               type: integer
 *             product_id:
 *               type: integer
 *
 *    responses:
 *      200:
 *        description: added to favorites
 *      400:
 *        description: Bad Request.
 *
 *
 *
 */
router.post('/add', (req, res) => {
    favoritesController
        .addToFavorites(req.body)
        .then((result) => res.json(result))
        .catch((error) => {
            console.log(error);

            res.status(400).send('Bad request').end();
        });
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
 *        name: user_id
 *        type: integer
 *        description: ID of the user to delete.
 *      - in: query
 *        name: product_id
 *        type: integer
 *        description: ID of the product to delete.
 *    responses:
 *      200:
 *        description: Product deleted for a user from favorites
 *      400:
 *        description: Bad request. Id should be a number
 *      404:
 *        description: Bad request. userID or productID doesn't exist
 *      
 *
 */
router.delete('/', (req, res, next) => {
    favoritesController
        .deleteFromFavorites(req.query.user_id, req.query.product_id)
        .then((result) => res.json(result))
        .catch(next);
});
module.exports = router;