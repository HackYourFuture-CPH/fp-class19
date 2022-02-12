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
 *    summary: Add a product to favorites for a user
 *    description:
 *      Will add a product to favorites of a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: favorite
 *        description: The product to add in favorites.
 *        schema:
 *          type: object
 *          required:
 *            - user_id
 *            - product_id
 *
 *
 *          properties:
 *            user_id:
 *              type: integer
 *            product_id:
 *              type: integer
 *
 *
 *
 *    responses:
 *      201:
 *        description: added to favorites
 *      400:
 *        description: Unexpected error.
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
 * /favorites/:
 *  delete:
 *    tags:
 *    - Favorites
 *    summary: Delete a favorites product for a user
 *    description:
 *      Will delete a product for a user.
 *    produces: application/json
 *    parameters:
 *      - in: query
 *        name: user_id
 *        description: ID of the user to delete.
 *
 *
 *      - in: query
 *        name: product_id
 *        description: ID of the product to delete.
 *    responses:
 *      200:
 *        description: product deleted for a user from favorites
 *      404:
 *        description: Unexpected error.
 */
router.delete('/', (req, res) => {
  console.log('Going to delete the favorite product of a user');
  console.log(req.query.user_id);
  console.log(req.query.product_id);
  favoritesController
    .deleteFromFavorites(req.query.user_id, req.query.product_id)
    .then((result) => {
      console.log(result);
      // If result is equal to 0, then that means the product id or user id does not exist
      if (result === 0) {
        res
          .status(404)
          .send('The product ID or user Id you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
