import {Datos} from './class/Datos.js';

// Mostrar motivo de abandono
let checkbox = document.getElementById('abandono');
$('#motivo').hide();
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        $('#motivo').show();
    } else {
        $('#motivo').hide();
    }
});

let selector = document.getElementById('selec-piloto');
let minutos = document.getElementById('minutos');
let ubicacion = document.getElementById('ubicacion');
let estado = document.getElementsByClassName('form-check-input');
let motivo = document.getElementById('enviar');