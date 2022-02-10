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
 *      Will add a product to favorites for a user.
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
 *      5XX:
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
 * /favorites/delete:
 *  post:
 *    tags:
 *    - Favorites
 *    summary: Delete a product from favorites from a user
 *    description:
 *      Will delete a favorite product for a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: favorite
 *        description: delete the product for a user from favorites.
 *
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
 *    responses:
 *      200:
 *        description: product deleted from favorites
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/delete', (req, res) => {
  favoritesController
    .deleteFromFavorites(req.body)
    .then((result) => {
      console.log(result);
      // If result is equal to undefined, then that means the product id or user id does not exist
      if (result === undefined) {
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
