const express = require('express');
const router = express.Router();

/* Los datos que voy a mostrar mediante la vista */
const products = [{
        name: 'Red Shoes',
        price: 75
    },
    {
        name: 'Black Bike',
        price: 300
    }
];

router.get('/', function(req, res) {
    res.render('products', { products });
});

module.exports = router;