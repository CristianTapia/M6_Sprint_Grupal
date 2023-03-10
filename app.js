// Cargar modulos
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

// Crear servidor express
const app = express();

// Configurar el servidor para usar el motor hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/resultados', (req, res) => {
    // Obtener datos del archivo JSON
    fs.readFile('carrera.json', (err, data) => {
        let dataParsed = JSON.parse(data);
        console.log(dataParsed);
        res.render('resultados', { dataCard: dataParsed.carrera});
    });

    // Obtener datos del archivo JSON
    fs.readFile('equipos.json', (err, data) => {
        let dataParsed = JSON.parse(data);
        console.log(dataParsed);
        res.render('puntajes', { dataCard: dataParsed.equipos});
    });
     
})

app.get('/puntajes', (req, res) => {
   // Obtener datos del archivo JSON
    fs.readFile('equipos.json', (err, data) => {
        let dataParsed = JSON.parse(data);
        console.log(dataParsed);
        res.render('puntajes', { dataCard: dataParsed.equipos});
    });
})



// Hacer que la app escuche el puerto 3000
app.listen('3000', () => {
    console.log('Servicio levantado')
})