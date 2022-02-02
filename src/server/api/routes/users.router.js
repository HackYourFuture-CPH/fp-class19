const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users.controller');

/**
 * @swagger
 * /user:
 *  post:
 *    tags:
 *    - Users
 *    summary: Create a user
 *    description:
 *      Will create a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: The module to create.
 *        schema:
 *          type: object
 *          required:
 *            - full_name
 *            - email
 *            - address
 *            - zipcode
 *            - city
 *            - country
 *            - created_at

 *          properties:
 *            full_name:
 *              type: string
 *            email:
 *              type: string
 *            address:
 *              type: string
 *            zipcode:
 *              type: number
 *            city:
 *              type: string
 *            country:
 *              type: string
 *            created_at:
 *              type: string
 *              format: date-time
 *            
 *    responses:
 *      201:
 *        description: user created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  usersController
    .createUser(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
