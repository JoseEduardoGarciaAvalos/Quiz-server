var Pregunta = require("../models/pregunta");

exports.getPreguntas = function (req, res) {
    Pregunta.get(function (err, preguntas) {
        res.status(200).json(
            preguntas
        );
    });
}

exports.getPreguntasByCodePregunta = function (req, res) {
    let codeQuiz = req.params.code
    Pregunta.findByCodePregunta(codeQuiz, (err, preguntas) => {
        res.status(200).json(
            preguntas
        );
    });
}