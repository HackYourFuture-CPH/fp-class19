const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const familiesController = require('../controllers/families.controller');

/**
 * @swagger
 * /families:
 *  get:
 *    tags:
 *    - Families
 *    summary: Get all families
 *    description:
 *      Will return all families.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  familiesController
    .getFamilies()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /families/{ID}:
 *  get:
 *    tags:
 *    - Families
 *    summary: Get family by ID
 *    description:
 *      Will return single family with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the family to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      400:
 *        description: Bad request. Family ID must be an integer and larger than 0.
 *      404:
 *        description: A family with the specified ID was not found.
 */
router.get('/:id', (req, res, next) => {
  familiesController
    .getFamilyById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});
module.exports = router;
