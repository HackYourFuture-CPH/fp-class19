const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const ordersController = require('../controllers/orders.controller');


router.post('/', (req, res, next) => {
  ordersController
    .newOrder(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
