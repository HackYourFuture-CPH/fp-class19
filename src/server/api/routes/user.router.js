const express = require('express');

const router = express.Router({ mergeParams: true });
// controllers
const userController = require('../controllers/user.controller');

/**
 * @swagger
 * /user/{user_id}/favorites:
 *  get:
 *    tags:
 *    - User
 *    summary: Get favorite products for a user
 *    description:
 *      Will return the favorite products for a user
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: user_id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The user_id of the user to get its favorite products
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request. Incorrect user id.
 *      404:
 *        description: The favorite products for the specified user_id did not found
 */
router.get('/:id/favorites/', (req, res, next) => {
  userController
    .getUserFavorites(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
