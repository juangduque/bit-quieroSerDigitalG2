const Producto = require('../models/Producto');

exports.crearProducto = (req, res) => {
    console.log('Creando el producto desde el controlador');
    console.log(req.body);
}
