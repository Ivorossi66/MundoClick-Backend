const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    titulo: { type: String, required: [true, 'El titulo es obligatorio'], unique: true },
    descripcion: { type: String },
    precio: { type: Number, default: 0 },
    img: { type: String },
    categoria: { type: String, required: [true, 'La categoria es obligatoria'] },
    stock: { type: Number, default: 0 },
    fechaRegistro: { type: Date, default: Date.now },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true },
});

module.exports = model('Producto', ProductoSchema);