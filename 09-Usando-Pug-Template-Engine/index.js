const express = require('express');
const path = require('path');
const productsRouter = require('./routes/products');

/* Initializations */
const app = express();

/* Settings */
app.set('port', process.env.PORT || 3000);

/* Template Engine PUG */
app.set('views', path.join(__dirname, './views/'));
app.set('view engine', 'pug');

/* Middlewares */

/* Routes */
app.use('/products', productsRouter);

/* Statis Files */

/* Start The Server */
app.listen(app.get('port'), function() {
    console.log(`Listening Server On Port ${app.get('port')}`);
});