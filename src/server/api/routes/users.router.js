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

module.exports = router;
