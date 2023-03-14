import { Datos } from './class/Datos.js';

let piloto = document.getElementById('selec-piloto');
let minutos = document.getElementById('minutos');
let ubicacion = document.getElementById('ubicacion');
let motivo = document.getElementById('motivo-txt');
let btn = document.getElementById('enviar');
let estado = document.getElementById('sel-estado-piloto');
let puntaje = document.getElementById('puntaje-piloto')
$("#motivo").hide();
estado.addEventListener("change", () => {
  let optionSelected = estado.value;
  console.log(optionSelected)
  if (optionSelected == 'Abandono') {
    $("#motivo").show();
  } else {
    $("#motivo").hide();
  }
});

// Llenar array con objetos que contienen la informacion de los pilotos
let contador = 0;
// let pilotosArray = [];

var pilotostest = {
    pilotosArray: []
};

btn.addEventListener('click', () => {
    contador++;
    let data = new Datos(piloto.value, minutos.value, ubicacion.value, estado.value, motivo.value, parseInt(puntaje.value));
    // pilotos.push(data);
    console.log(pilotosArray);

    pilotostest.pilotosArray.push(data);
});

