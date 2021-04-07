var Opcion = require("../models/opcion");

exports.getOpcionesByCodePregunta = function (req, res) {
    let code= req.params.code;
    Opcion.findByPregunta(code, (err, opciones) => {
        res.status(200).json(
            opciones
        );
    });
}

exports.createOpcion = function (req, res ) {
    let requestData = req.body
    if (!Array.isArray(req.body)) requestData = [req.body]

    let opciones = requestData.map( (data) => {
        return new Opcion({ 
            code: data.code,
            texto: data.texto,
            grupo: data.grupo,
            respuesta: data.respuesta,
            codePregunta: data.codePregunta,
         });
    })
    
    Opcion.add(opciones, (err, nuevasOpciones) => {
        res.status(200).json(
            nuevasOpciones
        );
    });
}