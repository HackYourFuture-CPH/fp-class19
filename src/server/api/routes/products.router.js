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
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  productsController
    .getProducts()
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
