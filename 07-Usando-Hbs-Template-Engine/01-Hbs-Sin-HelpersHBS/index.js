const express = require('express');
const path = require('path');
const wrapperHbs = require('consolidate');
const productsRouter = require('./routes/products');

/* Initializations */
const app = express();

/* Settings */
app.set('port', process.env.PORT || 3000);

/* Definiendo el Template */
app.engine('hbs', wrapperHbs.handlebars);
app.set('views', path.join(__dirname, './views/'));
app.set('view engine', 'hbs');

/* Middlewares */

/* Routes */
app.use('/products', productsRouter);

/* Static Files */

/* Start The Server */
app.listen(app.get('port'), function() {
    console.log(`Listening Server On Port ${app.get('port')}`);
});