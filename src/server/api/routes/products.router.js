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
 *       - in: query
 *         name: sortKey
 *         schema:
 *            type: string
 *         description: The name of the column that should be used for sorting
 *       - in: query
 *         name: sortOrder
 *         schema:
 *            type: string
 *         description: The value for the ordering type asc/desc
 *    responses:
 *      200:
 *        description: Successful request
 *      400:
 *        description: Type or value of parameters is incorrect
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
 *        description:  There are no products with discount.
 */
router.get('/on_discount', (req, res, next) => {
    productsController
        .getDiscountProducts()
        .then((result) => res.json(result))
        .catch(next);
});

/**
 * @swagger
 * /products/{ID}:
 *  get:
 *    tags:
 *    - Products
 *    summary: Get product by ID
 *    description:
 *      Will return single product with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the product to get.
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      404:
 *        description: Product with the specified id did not found.
 *      400:
 *        description: Invalid id. Bad request.
 */
router.get('/:id', (req, res, next) => {
    productsController
        .getProductById(req.params.id)
        .then((result) => res.json(result))
        .catch(next);
});

module.exports = router;