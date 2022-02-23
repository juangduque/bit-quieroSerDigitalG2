const Usuario = require("../models/Usuario");


exports.crearUsuario = async(req, res) => {
    try {
        let usuario;
        usuario = new Usuario(req.body);
        await usuario.save();
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.obtenerUsuarios = async(req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.obtenerUsuario = async(req, res) => {
    try {
        let usuario = await Usuario.findById(req.params.id)
        if (!usuario) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias' });
        }
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.actualizarUsuario = async(req, res) => {
    try {
        const { nombre, apellido, edad, correo, password, telefono, direccion } = req.body
        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ mensaje: 'No se encuentra el usuario' });
        }

        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.edad = edad;
        usuario.correo = correo;
        usuario.password = password;
        usuario.telefono = telefono;
        usuario.direccion = direccion;

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new: true });

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.eliminarUsuario = async(req, res) => {
    try {
        let usuario = await Usuario.findById(req.params.id)
        if (!usuario) {
            res.status(404).json({ mensaje: 'No se encuentra el usuario' });
        }
        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({ mensaje: 'El usuario fue eliminado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}
