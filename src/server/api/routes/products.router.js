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

module.exports = router;
