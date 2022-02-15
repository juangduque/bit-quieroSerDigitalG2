// console.log('Texto de prueba para nodemon');

const express = require('express');
const conectar_DB = require('./config/db');

const app = express();
conectar_DB();

app.get('/', (req, res) => {
    res.send('Mi aplicacion con Express');
})

app.listen(3000, () => {
    console.log("el servidor se esta ejecutando");
})