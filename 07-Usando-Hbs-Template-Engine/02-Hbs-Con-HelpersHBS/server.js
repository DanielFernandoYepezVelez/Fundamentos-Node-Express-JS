const express = require('express');
const app = express();
const hbs = require('hbs');

/* Para que funcionen los helpers HBS*/
require('./helpersHbs/helpers');

app.use(express.static(__dirname + '/public/'));

// Express Hbs Engine template
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Daniel Fernando",
        // anio: new Date().getFullYear() helper
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        // anio: new Date().getFullYear() helper
    });
});

app.listen(3000, () => {
    console.log('Escuchando Peticiones por el puerto 3000');
});