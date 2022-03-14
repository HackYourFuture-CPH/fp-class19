const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const ordersController = require('../controllers/orders.controller');

/**
 * @swagger
 * /orders:
 *  post:
 *    tags:
 *    - Orders
 *    summary: Save new order information
 *    description:
 *     will save an order for a user
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: Order
 *        description: create a new order for a user
 *        schema:
 *          type: object
 *          required:
 *            - user_id
 *            - product_id
 *          properties:
 *            user_id:
 *              type: integer
 *            items:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  product_id:
 *                    type: integer
 *                  quantity:
 *                    type: integer
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res, next) => {
  ordersController
    .newOrder(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

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

router.get('/:id', (req, res, next) => {
  ordersController
    .getOrderById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /orders/user/{user_id}:
 *  get:
 *    tags:
 *    - Orders
 *    summary: Get orders by user ID
 *    description:
 *      Will return all orders for specific user.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: user_id
 *       schema:
 *         type: string
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

router.get('/user/:user_id', (req, res, next) => {
  ordersController
    .getOrdersByUserId(req.params.user_id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
