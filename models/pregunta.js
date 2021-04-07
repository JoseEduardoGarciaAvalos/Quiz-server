var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PreguntaSchema = new Schema({
    code: Number,
    texto: String,
    codeQuiz: Number,
});

PreguntaSchema.statics.createInstance = function (code, texto, codeQuiz) {
    return new this({
        code,
        texto,
        codeQuiz
    });
};

PreguntaSchema.statics.get = function (cb) {
    return this.find({}, cb);
};

PreguntaSchema.statics.findByCodePregunta = function (codeQuiz, cb) {
    return this.find({ codeQuiz }, cb);
};

PreguntaSchema.statics.add = function (aPregunta, cb) {
    return this.create(aPregunta, cb);
  };

// Las collecciones deben estar en plural
module.exports = mongoose.model('Pregunta', PreguntaSchema);