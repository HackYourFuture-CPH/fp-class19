const express = require('express');

const router = express.Router({ mergeParams: true });
// controllers
const ordersController = require('../controllers/orders.controller');
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

module.exports = router;