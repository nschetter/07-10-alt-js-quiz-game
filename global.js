// variables containing the divs of each question and their choices
var divQuestion1 = document.getElementById('question1');
var divQuestion2 = document.getElementById('question2');
var divQuestion3 = document.getElementById('question3');
var divQuestion4 = document.getElementById('question4');

// variables containing an array of the questions AND an array of answers
var questions = [question1, question2, question3, question4];
var answers = ["b", "a", "d", "a"];

// variables handling the submission and interactivity of the app
var buttonSubmit = document.getElementById("submitter");
var userAnswer = document.getElementById("answer");
var questionResult = document.getElementById("question_result"); 
var nextButton = document.getElementById("next");
var totalResult = document.getElementById("total_result");

//
var buttonSubmitter = document.getElementById('submitter');
buttonSubmitter.addEventListener('click', process_answer_submission);

//
var buttonNext = document.getElementById('next');
buttonNext.addEventListener('click', clearAll);