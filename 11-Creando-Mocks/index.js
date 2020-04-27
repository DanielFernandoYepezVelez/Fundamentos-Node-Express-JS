const express = require('express');
const producstApiRouter = require('./routes/api/products');

/* Initializations */
const app = express();

/* Settings */
app.set('port', process.env.PORT || 4000);

/* Middlewares */

/* Routes */
app.use('/api/products', producstApiRouter);

/* Start The Server */
app.listen(app.get('port'), function() {
    console.log(`Listening Server On Port ${app.get('port')}`);
});