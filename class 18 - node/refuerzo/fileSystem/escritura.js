const fs = require('fs');

let listaCompra = 'Chitos, Cocacola, JET';

fs.writeFile('./lista.txt', listaCompra, error => {
    error ? console.log(error) : console.log('El archivo se creo');
})