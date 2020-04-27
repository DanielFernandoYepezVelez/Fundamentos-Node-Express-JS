const express = require('express');

/* Initializations */
const app = express();

/* Settings */
app.set('port', process.env.PORT || 3000);

/* Middlewares */

/* Routes */

/* Static Files */

/* Start The Server */
const server = app.listen(app.get('port'), function() {
    console.log(`Listening Server On port ${app.get('port')}`);
});