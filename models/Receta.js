const mongoose = require('mongoose');

const recetaSchema = new mongoose.Schema({
    // nombre: {type: String, require: true}
    nombre: String,
    ingredientes: String,
    porciones: Number,
});
const RecetaModel = mongoose.model('Receta', recetaSchema,'receta');
module.exports = RecetaModel;