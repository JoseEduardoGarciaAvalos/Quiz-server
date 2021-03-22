var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PreguntaSchema = new Schema({
    code: Number,
    texto: String,
});

PreguntaSchema.statics.createInstance = function (code, texto) {
    return new this({
        code,
        texto
    });
};

PreguntaSchema.statics.get = function (cb) {
    return this.find({}, cb);
};

PreguntaSchema.statics.findByCode = async function (code, cb) {
    return this.findOne({ code }, cb);
};

// Las collecciones deben estar en plural
module.exports = mongoose.model('Pregunta', PreguntaSchema);