let piloto = document.getElementById('selec-piloto');

// read local JSON file in javascript
fetch('/carrera.json')
    .then(response => response.json())
    .then(console.log)

piloto.addEventListener('change', () => {
    if (piloto.value == 'Carlos Sainz') {
        console.log('asdf')
    }
});
