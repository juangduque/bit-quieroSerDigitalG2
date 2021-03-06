//recuerden que estas rutas las unimos en api.js

const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/productos', productoController.crearProducto);
router.get('/productos', productoController.consultarProductos);
router.get('/productos/:id', productoController.consultarProducto);
router.put('/productos/:id', productoController.actualizarProducto);
router.delete('/productos/:id', productoController.eliminarProducto);

module.exports = router;
