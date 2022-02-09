const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const productsController = require('../controllers/products.controller');

/**
 * @swagger
 * /products:
 *  get:
 *    tags:
 *    - Products
 *    summary: Get all products
 *    description:
 *      Will return all products.
 *    produces: application/json
 *    parameters:
 *       - in: query
 *         name: offset
 *         schema:
 *            type: integer
 *         description: The number of items to skip before starting to collect the result set
 *       - in: query
 *         name: limit
 *         schema:
 *            type: integer
 *         description: The numbers of items to return
 *    responses:
 *      200:
 *        description: Successful request
 *      400:
 *        description: Limit and offset should be a number
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  productsController
    .getProducts(req)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /products/on_discount:
 *  get:
 *    tags:
 *    - Products
 *    summary: Get Products on discount
 *    description:
 *      Will return all the Products on discount.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      404:
 *        description:  Bad request.
 */
router.get('/on_discount', (req, res, next) => {
  productsController
    .getDiscountProducts()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
