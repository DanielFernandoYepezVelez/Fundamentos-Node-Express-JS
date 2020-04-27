const { Router } = require('express');
const router = Router();

const products = [{
        name: 'Product First',
        price: 55
    },
    {
        name: 'Product Second',
        price: 77
    }
];

router.get('/', function(req, res, next) {
    res.render('products', { products });
});

module.exports = router;