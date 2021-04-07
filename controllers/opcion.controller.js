var Opcion = require("../models/opcion");

exports.getOpcionesByCodePregunta = function (req, res) {
    let code= req.params.code;
    Opcion.findByPregunta(code, (err, opciones) => {
        res.status(200).json(
            opciones
        );
    });
}