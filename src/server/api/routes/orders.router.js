const express = require('express');
const ordersController = require('../controllers/orders.controller');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * /orders/{id}:
 *  get:
 *    tags:
 *    - Orders
 *    summary: Get orders by order id
 *    description:
 *      Will return all orders for specific id.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: Get a specific order by its own order id
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      404:
 *        description: incorrect entry with the provided id
 *      5XX:
 *        description: Unexpected error.
 */

module.exports = router;
router.get('/:id', (req, res, next) => {
  ordersController
    .getOrderById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;

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
 *       name: user_id
 *       schema:
 *         type: integer
 *         required: true
 *         description: Get all orders of specific user with user_id
 */

router.get('/', (req, res, next) => {
  ordersController
    .getOrdersByUserId(req.query.user_id)
    .then((result) => res.json(result))
    .catch(next);
});
