// Quiz
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.isIndex = function() {
  return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
  }

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}

// Questions
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
/*
Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}
*/

Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
}

// Apps
function populate() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
      // question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;

      // options
      var choices = quiz.getQuestionIndex().choices;
      for(var i = 0; i < choices.length; i++) {
          var element = document.getElementById("btn" + i);  // btn # choice
          element.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgress();
  }
};

function guess(id) {     // id # guess
  var button = document.getElementById(id);
  button.onclick = function(event) {
      quiz.guess(this.innerHTML);
      populate();
  }
}


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};


function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;

  document.getElementById('myform').reset();
};

// create questions
var questions = [
  new Question("How to capital city Hungary?", ["Bukurest", "Budapest", "Sofia", "Kyev"], "Budapest"),
  new Question("Which he was fired Master Jan Hus?", ["6.7.1415", "6.6.1414", "6.8.1415", "5.7.1415"], "6.7.1415"),
  new Question("Which animal is more quickly?", ["Dog", "Cheetah", "Ostrich", "Bear"], "Cheetah"),
  new Question("Which poster is the strongest from DC?", ["Batman", "Superman", "Wonder Woman", "Aquamen"], "Superman"),
  new Question("Who played movie Furious and Fast?", ["Paul Walker and Vin Diesel", "Roman Atkinson and Robert De Niro", "Jason Statham and Dolph Lungren", "Will Smith and Martin Laurence"], "Paul Walker and Vin Diesel"),
  new Question("In which year origined Metallica?", ["1979", "1981", "1983", "1993"], "1981"),
  new Question("Which currency is stronger?", ["Dollar", "Pound", "Euro", "Yen"], "Pound"),
  new Question("Which during took place the Second World War?", ["1918-1935", "1935-1942", "1939-1945", "1942-1953"], "1939-1945"),
  new Question("What is this SQL?", ["Programming Language", "Operating System", "Networking", "Database"], "Database"),
  new Question("Which city is the biggest?", ["Prague", "New York", "Tokio", "Shanghai"], "Shanghai")
];
/*
function resetForm() {
  document.getElementById('myform').reset();
}
*/
var quiz = new Quiz(questions);

populate();

