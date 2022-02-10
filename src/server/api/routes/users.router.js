const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users.controller');

/**
 * @swagger
 * /user:
 *  post:
 *    tags:
 *    - User
 *    summary: Add a user
 *    description:
 *      Will add a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: User
 *        description: The user to add.
 *        schema:
 *          type: object
 *          items:
 *            $ref: '#/UserModel'
 *          example:
 *            { "full_name":  John Dean, "email": john@dean.com, "address" : Enghavevej 80, zipcode: 2300, "city": Copenhagen, "country" : Denmark }
 *
 *    responses:
 *      201:
 *        description: User added
 *      400:
 *        description: Bad request
 *      5XX:
 *        description: Unexpected error.
 *
 *  UserModel:
 *     type: object
 *     properties:
 *       full_name:
 *         type: string
 *       email:
 *         type: string
 *       address:
 *         type: string
 *       zipcode:
 *         type: integer
 *       city:
 *         type: string
 *       country:
 *         type: string
 */
router.post('/', (req, res) => {
  usersController
    .createUser(req.body)
    .then((result) => res.status(201).json(result))
    .catch((error) => {
      let responseMessage = '';
      if (error.code === 'ER_DUP_ENTRY') {
        responseMessage = 'Sorry, the user already exists';
      }
      res.status(400).send(responseMessage).end();
    });
});

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
  usersController
    .getUserFavorites(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
