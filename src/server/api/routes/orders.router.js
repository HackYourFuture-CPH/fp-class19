const express = require('express');
// controllers
const ordersController = require('../controllers/orders.controller');

const router = express.Router({ mergeParams: true });

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
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      404:
 *        description: incorrect entry with the provided id
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  ordersController
    .getOrderByUserId(req.query.user_id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
