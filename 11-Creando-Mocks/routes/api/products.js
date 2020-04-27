const express = require('express');
const router = express.Router();

const productMocks = require('../../utils/mocks/products');

router.get('/', (req, res, next) => {
    res.status(200).json({
        data: productMocks,
        message: 'Products Listed Personal'
    });
});

module.exports = router;