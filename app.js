// Cargar modulos
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

// Crear servidor express
const app = express();

// Permitir archivos estaticos (CSS)
app.use(express.static('public'))

// Configurar el servidor para usar el motor hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Hacer que la app escuche el puerto 3000
app.listen('3000', () => {
    console.log('Servicio levantado')
})