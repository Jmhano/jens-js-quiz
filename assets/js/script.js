
var choicesEl = document.getElementById("choice-text");
var question = document.querySelector(".quiz-questions");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var buttonEl = document.querySelector("#submit");
var questionCounter = 0;
var startButton = document.getElementById("start-quiz");


let availableQuestions = [
  {
    question: "Javascript is an _______ language?",
    choice1: "Object-Oriented",
    choice2: "Procedural",
    choice3: "Object-Based",
    choice4: "None of the above",
    answer: 1,
  },

  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    choice1: "var",
    choice2: "let",
    choice3: "Both A and B",
    choice4: "None of the above",
    Answer: 3,
  },

  {
    question:
      "Which of the following keywords are used to access HTML elements using Javascript?",
    choice1: "getElementById",
    choice2: "getElementByClassName",
    choice3: "Both A and B",
    choice4: "None of the above",
    answer: 3,
  },

  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    choice1: "document.write()",
    choice2: "console-log()",
    choice3: "window-alert()",
    choice4: "All of the above",
    answer: 4,
  },
];

var getNewQuestion = function () {
  console.log("ran");
  //   if (questionCounter > availableQuestions.length) {
  //     localStorage.setItem("mostRecentScore", score);
  //     return window.location.assign("score.html");
  //   }
  var currentQ = availableQuestions[questionCounter];
//   var questionEl = document.createElement("h2");


  question.textContent = currentQ.question;
//   questionEl.classList.add("quiz-questions");
  var choice1El = document.createElement("li");
  choice1El.textContent = currentQ.choice1;
  choice1El.classList.add("single-choice");
  var choice2El = document.createElement("li");
  choice2El.textContent = currentQ.choice2;
  choice2El.classList.add("single-choice");
  var choice3El = document.createElement("li");
  choice3El.textContent = currentQ.choice3;
  choice3El.classList.add("single-choice");
  var choice4El = document.createElement("li");
  choice4El.textContent = currentQ.choice4;
  choice4El.classList.add("single-choice");
  choicesEl.innerHTML = "";
  choicesEl.append(choice1El, choice2El, choice3El, choice4El);
};

startButton.addEventListener("click", getNewQuestion);

choicesEl.addEventListener("click", function () {
    alert("button clicked");
    questionCounter++;
  });
