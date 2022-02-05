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
 *        description: The use to create.
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
 *              type: John Dean
 *            email:
 *              type: john@dean.com
 *            address:
 *              type: Enghavevej 80
 *            zipcode:
 *              type: 2300
 *            city:
 *              type: Copenhagen
 *            country:
 *              type: Denmark
 *            created_at:
 *              type: 2022-01-31 12:05:47
 *              format: date-time
 *            
 *    responses:
 *      200:
 *        description: user created
 *      400:
 *        description: User request error.
 *      500:
 *        description: error with Database.
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
