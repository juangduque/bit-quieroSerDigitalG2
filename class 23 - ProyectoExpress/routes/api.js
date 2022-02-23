const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const usuarioController = require('../controllers/usuarioController');
//productos
router.post('/productos', productoController.crearProducto);
router.get('/productos', productoController.consultarProductos);
router.get('/productos/:id', productoController.consultarProducto);
router.put('/productos/:id', productoController.actualizarProducto);
router.delete('/productos/:id', productoController.eliminarProducto);

//usuarios
router.post('/usuarios', usuarioController.crearUsuario);
router.get('/usuarios', usuarioController.obtenerUsuarios);
router.get('/usuarios/:id', usuarioController.obtenerUsuario);
router.put('/usuarios/:id', usuarioController.actualizarUsuario);
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);

module.exports = router;
