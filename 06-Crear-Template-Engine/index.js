const express = require('express');
const expressJsx = require('./expressJsx');

/* Initializations */
const app = express();

/* Settings */
/* Creando el Template Engine */
app.engine('jsx', expressJsx);
app.set('views', './views');
app.set('view engine', 'jsx');

/* Middlewares */

/* Routes */
app.get('/', function(req, res) {
    res.render('index', { hello: 'Hola', world: 'Mundo' });
});

/* Static Files */

/* Start The Server */
const server = app.listen(3000, function() {
    console.log(`Listening Server On Port ${server.address().port}`);
});