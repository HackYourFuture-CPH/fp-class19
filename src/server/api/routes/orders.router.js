/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const ordersController = require('../controllers/orders.controller');

/**
 * @swagger
 * /orders/{ID}:
 *  get:
 *    tags:
 *    - Orders
 *    summary: Get orders by user ID
 *    description:
 *      Will return all orders for specific user.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: UID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the user to get orders
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  ordersController
    .getOrderByUserId(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
