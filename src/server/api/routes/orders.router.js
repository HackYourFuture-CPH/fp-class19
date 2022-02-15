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
 *          properties:
 *            user_id:
 *              type: string
 *            items:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  productId:
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

module.exports = router;
