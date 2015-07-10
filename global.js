// variables containing the divs of each question and their choices
var divQuestion1 = document.getElementById('question1');
var divQuestion2 = document.getElementById('question2');
var divQuestion3 = document.getElementById('question3');
var divQuestion4 = document.getElementById('question4');

// variables containing an array of the questions AND an array of answers
var questions = [question1, question2, question3, question4];
var answers = ["b", "a", "d", "a"];

// variables containing our counter and the score
var score = 0;
var i = 0;

// variables handling the submission and interactivity of the app
var buttonSubmit = document.getElementById("submitter");
var userAnswer = document.getElementById("answer");
var questionResult = document.getElementById("question_result"); 
var nextButton = document.getElementById("next");
var totalResult = document.getElementById("total_result");

// runs the function process_answer_submission when user clicks submitter button
var buttonSubmitter = document.getElementById('submitter');
buttonSubmitter.addEventListener('click', process_answer_submission);

// runs the function clearAll when user clicks the next button
var buttonNext = document.getElementById('next');
buttonNext.addEventListener('click', clearAll);

// returns the string the user entered in the input field with the id of "answer"
function given_answer() {
  return userAnswer.value;
}

// variable containing anonymous function
// displays the respective div of each question
var next_question = function() {
  questions[i].style.display = "block"
}

// variable containing anonymous function
// answer_text comes from process_answer_submission function
var is_correct_answer = function(answer_text) {
  if (answer_text === answers[i]) { 
    return true; 
  } else {
    return false;
  }   
}

// function that clears ALL fields including the div of the question
function clearAll() {
  userAnswer.value = "";
  questions[i].style.display = "none"
  questionResult.innerHTML = "";
}

// anonymous function inside a variable
// correct is taken from process_answer_submission
// if correct is true, score incremented by one and questionResult div reads "Success!"
var update_question_result = function(correct) { 
  if (correct == true) {
    score++;
    questionResult.innerHTML = "Success!"  
  } else {
    questionResult.innerHTML = "Incorrect!" 
  }
}

// function that processes multiple functions
// 
function process_answer_submission(){
  var user_answer = given_answer(); 
  update_question_result(is_correct_answer(userAnswer));
}







