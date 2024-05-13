const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const recetaRutas = require('./rutas/recetaRutas');


const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
//CONEXION CON MONGODB
mongoose.connect(MONGO_URI).then(
() => {
    console.log('Conexion exitosa');
    app.listen(PORT, () => {console.log("servidor express corriendo en el puerto "+ PORT)})
}
) .catch(error => console.log('error de conexion',error));

app.use('/recetas',recetaRutas);