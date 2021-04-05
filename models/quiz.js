var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
    code: Number,
    titulo: String,
    descripcion: String,
    coverURL: String,
});

QuizSchema.statics.createInstance = function (code, titulo, descripcion, coverURL) {
    return new this({
        code,
        titulo,
        descripcion,
        coverURL
    });
};

QuizSchema.statics.get = function (cb) {
    return this.find({}, cb);
};

QuizSchema.statics.add = function (aQuiz, cb) {
    return this.create(aQuiz, cb);
  };

module.exports = mongoose.model('Quizes', QuizSchema);