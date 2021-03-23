var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OpcionSchema = new Schema({
    code: Number,
    texto: String,
    grupo: Number,
    respuesta: Number,
    codePregunta: Number,
});

OpcionSchema.statics.createInstance = function (code, texto, grupo, respuesta, codePregunta) {
    return new this({
        code,
        texto,
        grupo,
        respuesta,
        codePregunta
    });
};

OpcionSchema.statics.get = function (cb) {
    return this.find({}, cb);
};

OpcionSchema.statics.findByPregunta = function (code, cb) {
    return this.find({ codePregunta: code}, cb);
};

module.exports = mongoose.model('Opciones', OpcionSchema);