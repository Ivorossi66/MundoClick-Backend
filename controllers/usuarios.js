const { response, request } = require('express');
const Usuario = require('../models/usuarios');

/* método GET */
/* Pedimos todos los usuarios de la base de datos */

const usuarioGet = async (req=request, res=response) => {
    const {desde=0, limite=5 } = req.query; /* recibimos los parámetros */
    const query = {estado:true};  /* me muestra los usuarios que tienen el estado true */

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query).skip(desde).limit(limite)
    ]);

    res.json({
        mensaje: 'Usuarios Obtenidos',
        total,
        usuarios
    });
};

/* pedimos un usuario por su id */

const usuarioGetID = async (req=request, res=response) => {
    const { id } = req.params;

    const usuario = await Usuario.findById(id);

    res.json({
        mensaje: 'Usuario obtenido',
        usuario /* muestra el usuario */
    });
};


/* Método POST, creamos un usuario */

const usuarioPost = async (req=request, res=response) => {
    // Recibir el cuerpo de la petición
    const datos = req.body

    const { nombre, apellido, correo, password, rol } = datos;
    const usuario = new Usuario({ nombre, apellido, correo, password, rol });


    //Encriptar la contraseña


    // Guardar los dtos en la base de datos
    await usuario.save();

    // Enviar un mensaje de respuesta
    res.json({
        mensaje: 'Usuario creado',
        usuario
    });
};
