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
 *    summary: Get order by ID
 *    description:
 *      Will return single order with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the order to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request. Order ID must be an integer and larger than 0.
 *      404:
 * description: A order with the specified ID was not found.
 */
router.get('/:id', (req, res, next) => {
    ordersController
        .getOrderById(req.params.id)
        .then((result) => res.json(result))
        .catch(next);
});

module.exports = router;