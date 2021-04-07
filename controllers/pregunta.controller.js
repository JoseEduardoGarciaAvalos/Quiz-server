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

exports.createPregunta = function (req, res ) {
    let requestData = req.body
    if (!Array.isArray(req.body)) requestData = [req.body]

    let preguntas = requestData.map( (data) => {
        return new Pregunta({ 
            code: data.code,
            texto: data.texto,
            codeQuiz: data.codeQuiz,
         });
    })
    
    Pregunta.add(preguntas, (err, nuevaPregunta) => {
        res.status(200).json(
            nuevaPregunta
        );
    });
}