// Definición de librerias
require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var preguntaAPIRouter = require('./routes/pregunta.route');

// Conexión de la Base de Datos
var mongoDB = process.env.MONGO_URI;

mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB conexión error: '));

var app = express();
app.use('/api/pregunta', preguntaAPIRouter);
app.listen(3000);