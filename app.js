// Cargar modulos
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const path = require('path');
// const bodyParser = require('body-parser');

// Crear servidor express
const app = express();
const puerto = 3000;

// Permitir archivos estaticos
app.use(express.static('public'))

// Configurar el servidor para usar el motor hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.json());

app.post('/abandonos', (req, res) => {
    let datosRecibidos = req.body;
  //   console.log(datosRecibidos);
    let jsonString = JSON.stringify(datosRecibidos);
    res.send("Data received!");
    console.log(jsonString)
  
  // fs.appendFile('pilotos.json', jsonString, (err) => {
  //     if (err) throw err;
  //     console.log('Contenido ingresado');
  //   });
  
    fs.writeFile('pilotos.json', jsonString, (err) => {
      if (err) throw err;
      console.log('Guardado');
    });
  });

// Almacenar datos de archivos JSON
const archivos = ['carrera.json', 'equipos.json', 'pilotos.json'];

const data = {};

// Recorrer array archivos
archivos.forEach(archivo => {
  const rawData = fs.readFileSync(archivo);
  const jsonData = JSON.parse(rawData);
  data[archivo] = jsonData;
//   console.log(data[archivo])
});

app.get('/resultados', (req, res) => {
    res.render('resultados', { dataEquipos: data['equipos.json'].equipos, dataCarrera: data['carrera.json'].carrera });
});

app.get('/abandonos', (req, res) => {
    res.render('abandonos', { dataPilotos: data['pilotos.json'].infoPilotos, dataEquipos: data['equipos.json'].equipos });
});

app.get('/puntajes', (req, res) => {
    res.render('puntajes', { dataCarrera: data['carrera.json'].carrera});
});

app.get('/', (req, res) => {
    res.render('index');
});





// Hacer que la app escuche el puerto 3000
app.listen(puerto, () => {
    console.log('Servicio levantado');
})

// Insertar mas archivos JSON dentro de una pagina
    // const data1 = require('./data1.json');
    // const data2 = require('./data2.json');
    // res.render('template', { data1, data2 });