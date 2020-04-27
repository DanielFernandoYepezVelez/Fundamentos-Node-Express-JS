const http = require('http');

const persona = {
    nombre: 'Daniel Fernando Yepez Vélez',
    edad: '26 años',
    profesion: 'Desarrollador Backend',
    url: '',
    ciudad: 'Medellin',
    pais: 'Colombia'
}

/* Creando Un Servidor Con El Paquete Nativo http */
http.createServer((req, res) => {
    persona.url = req.url;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(persona));
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');