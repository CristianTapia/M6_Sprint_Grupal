import { Datos } from './class/Datos.js';

let circuito = document.getElementById('selec-circuito');
let piloto = document.getElementById('selec-piloto');
let minutos = document.getElementById('minutos');
let ubicacion = document.getElementById('ubicacion');
let motivo = document.getElementById('motivo-txt');
let estado = document.getElementById('sel-estado-piloto');
let puntaje = document.getElementById('puntaje-piloto');
let btn = document.getElementById('enviar');

// Mostrar u ocultar el campo "Motivo"
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

// Objeto vacio para almacenar objetos
let pilotosJSON = {
  infoPilotos: []
};

console.log(pilotosJSON.infoPilotos)

// Generar JSON con informacion al enviar formulario
btn.addEventListener('click', () => {
  let data = new Datos(circuito.value, piloto.value, minutos.value, ubicacion.value, estado.value, motivo.value, parseInt(puntaje.value));
  pilotosJSON.infoPilotos.push(data);
  console.log(pilotosJSON);
  // const json = JSON.stringify(pilotosJSON);


  // AJAX para enviar la informacion

  // Crear objeto
  let xhr = new XMLHttpRequest();

  // Abrir conexion
  xhr.open("POST", "/abandonos");

  // Enviar informacion
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(json);
});



// Otra opcion es hacerlo es enviar un arreglo de objetos 

  // let pilotos = [];
  // addEventListener('', () => {
  //  data = objeto generado
  //  pilotos.push(data);
  // console.log(pilotos)
  // const json = JSON.stringify(pilotos);
  // console.log(json)
  //)}