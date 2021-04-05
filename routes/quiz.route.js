var express = require('express');
var router = express.Router();
var quizController = require("../controllers/quiz.controller");

router.get('/', quizController.getQuizes);
router.post('/', quizController.createQuiz);

module.exports = router;