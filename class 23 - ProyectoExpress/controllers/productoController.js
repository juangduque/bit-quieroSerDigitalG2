const Producto = require('../models/Producto');

exports.crearProducto = async(req, res) => {
    // console.log('Creando el producto desde el controlador');
    // console.log(req.body);

    try {
        let data_producto;
        data_producto = new Producto(req.body);
        await data_producto.save();
        res.send(data_producto)

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }

}

exports.consultarProductos = async(req, res) => {
    try {
        const data_producto = await Producto.find();
        res.json(data_producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.consultarProducto = async(req, res) => {
    try {
        const data_producto = await Producto.findById(req.params.id);

        if (!data_producto) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias' })
        }
        res.json(data_producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.actualizarProducto = async(req, res) => {
    try {
        const { nombre, precio, proveedor, cantidad_stock } = req.body
        let data_producto = await Producto.findById(req.params.id);

        if (!data_producto) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para la actualización de datos' })
        }

        data_producto.nombre = nombre;
        data_producto.precio = precio;
        data_producto.proveedor = proveedor;
        data_producto.cantidad_stock = cantidad_stock;

        data_producto = await Producto.findOneAndUpdate({ _id: req.params.id }, data_producto, { new: true })
        res.json(data_producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}


exports.eliminarProducto = async(req, res) => {
    try {
        const data_producto = await Producto.findById(req.params.id);
        if (!data_producto) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para eliminar productos' })
        }
        await Producto.findByIdAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}
