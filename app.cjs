var readlinesync = require("readline-sync");

var score = 0;
var questionNo = 1;

// data structure
var question = [
  {
    question: "Have you wacthed MONEY HEIST series  ",
    answer: "yes",
  },
  {
    question: "How many seasons are there in MONEY HEIST",
    answer: "5",
  },
  {
    question: "Who is the master mind in MONEY HEIST ",
    answer: "Professor",
  },
  {
    question: "Which season does Nairobi dies  ",
    answer: "Part4",
  },
  {
    question: "How many episodes are there in Part 1",
    answer: "13",
  },
  {
    question: "who dies in the last season ",
    answer: "tokyo",
  },
  {
    question: "Are you addicted to series",
    answer: "yes",
  },
];

function welcome() {
  var userName = readlinesync.question("what is your name ");
  console.log("Hey " + userName + "Welcome to  MARK-2-quiz-(@_@) ");
}

function quiz(question, answer) {
  var current_answer = readlinesync.question(question);

  if (current_answer.toUpperCase() === answer.toUpperCase()) {
    console.log("true");
    score++;
  } else {
    console.log("false");
    score--;
  }
}

function play() {
  for (var i = 0; i < question.length; i++) {
    var value1 = question[i];
    console.log("question NO:" + questionNo);
    questionNo++;
    quiz(value1.question, value1.answer);
  }
}

function final_score() {
  console.log("-----------------------------");
  console.log("Thank you for playing the quiz ");
  console.log("The final score : " + score);
  console.log("===================================");
}

// calling the function
welcome();
play();
final_score();
