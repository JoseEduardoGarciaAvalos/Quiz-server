var express = require('express');
var router = express.Router();
var preguntaController = require("../controllers/pregunta.controller");

router.get('/', preguntaController.getPreguntas);
router.post('/', preguntaController.createPregunta);
router.get('/:code', preguntaController.getPreguntasByCodePregunta);

module.exports = router;