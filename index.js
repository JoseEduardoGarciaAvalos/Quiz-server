// Definición de librerias
require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
const cors = require('cors');
//  Definición de subrutas
var preguntaAPIRouter = require('./routes/pregunta.route');
var opcionAPIRouter = require('./routes/opcion.route');
var quizAPIRouter = require('./routes/quiz.route');

// Conexión de la Base de Datos
var mongoDB = process.env.MONGO_URI;

mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB conexión error: '));

var app = express();
// Configuración de CORS
app.use(cors());
// Configuración de la Decodificación de solicitudes con json en su cuerpo.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas. define the first route
app.get("/", function (req, res) { res.send("<h1>Hola mundo</h1>")})
app.use('/api/pregunta', preguntaAPIRouter);
app.use('/api/opcion', opcionAPIRouter);
app.use('/api/quiz', quizAPIRouter );
app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo...")); // Qué puerto utilizará Heroku, o el valor predeterminado es 3000