var Opcion = require("../models/opcion");

exports.opcion_get_by_codePregunta = function (req, res) {
    let code= req.params.code;
    Opcion.findByPregunta(code, (err, opciones) => {
        res.status(200).json({
            opciones
        });
    });
}