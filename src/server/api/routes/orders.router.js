/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const ordersController = require('../controllers/orders.controller');

/**
 * @swagger
 * /orders?user=user_id:
 *  get:
 *    tags:
 *    - Orders
 *    summary: Get orders by user ID
 *    description:
 *      Will return all orders for specific user.
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: user
 *       schema:
 *         type: integer
 *         required: true
 *         description: Get all orders of specific user with user_id
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      404:
 *        description: incorrect entry with the provided id
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res) => {
  ordersController
    .getOrderByUserId(req.query.user)
    .then((result) => res.json(result))
    .catch((error) => console.log(error));
});

module.exports = router;
