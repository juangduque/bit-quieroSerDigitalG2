//recuerden que estas rutas las unimos en api.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuario', usuarioController.crearUsuario);
router.get('/usuario', usuarioController.obtenerUsuarios);
router.get('/usuario/:id', usuarioController.obtenerUsuario);
router.put('/usuario/:id', usuarioController.actualizarUsuario);
router.delete('/usuario/:id', usuarioController.eliminarUsuario);

module.exports = router;
