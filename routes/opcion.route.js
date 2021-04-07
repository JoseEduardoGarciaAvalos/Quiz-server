var express = require('express');
var router = express.Router();
var opcionController = require("../controllers/opcion.controller");

router.get('/:code', opcionController.getOpcionesByCodePregunta);
//router.post('/:code/update', preguntaController.pregunta_get);

module.exports = router;