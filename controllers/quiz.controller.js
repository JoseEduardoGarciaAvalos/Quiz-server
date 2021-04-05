var Quiz = require("../models/quiz");

exports.getQuizes = function (req, res) {
    Quiz.get((err, Quizes) => {
        res.status(200).json(
            Quizes
        );
    });
}

exports.createQuiz = function (req, res) {
    var quiz = new Quiz({ 
        code: req.body.code,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        coverURL: req.body.coverURL
     });
     Quiz.add(quiz, (err, newQuiz) => {
        res.status(200).json(
            newQuiz
        );
    });
}