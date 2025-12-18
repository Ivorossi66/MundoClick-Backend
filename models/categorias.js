const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'], unique: true },
    descripcion: { type: String },
    estado: { type: Boolean, required: true, default: true },
    fechaRegistro: { type: Date, default: Date.now },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true }, /* Se relaciona la categoria con un usuario */
});

module.exports = model('Categoria', CategoriaSchema);