var Pregunta = require("../models/pregunta");

exports.pregunta_get = function (req, res) {
    Pregunta.get(function (err, preguntas) {
        res.status(200).json({
            preguntas
        });
    });
}