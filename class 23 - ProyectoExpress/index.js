// console.log('Texto de prueba para nodemon');

const express = require('express');
const conectar_DB = require('./config/db');

const app = express();
conectar_DB();

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(3000, () => {
    console.log("el servidor se esta ejecutando en el puerto 3000");
})
