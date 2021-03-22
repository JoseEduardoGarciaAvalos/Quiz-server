var express = require('express');
var router = express.Router();
var preguntaController = require("../controllers/pregunta.controller");

router.get('/', preguntaController.pregunta_get);
//router.post('/:code/update', preguntaController.pregunta_get);

module.exports = router;