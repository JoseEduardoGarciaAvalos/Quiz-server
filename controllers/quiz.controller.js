var Quiz = require("../models/quiz");

exports.getQuizes = function (req, res) {
    Quiz.get((err, Quizes) => {
        res.status(200).json(
            Quizes
        );
    });
}

exports.createQuiz = function (req, res) {
    let requestData = req.body
    if (!Array.isArray(req.body)) requestData = [req.body]

    let quizes = requestData.map( (data) => {
        return new Quiz({ 
            code: data.code,
            titulo: data.titulo,
            descripcion: data.descripcion,
            coverURL: data.coverURL
         });
    })
    
    Quiz.add(quizes, (err, newQuiz) => {
        res.status(200).json(
            newQuiz
        );
    });
}