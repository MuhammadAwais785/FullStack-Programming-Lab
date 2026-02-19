// =============================

var correctAnswerQ1 = "a";
var correctAnswerQ2 = "a";
var correctAnswerQ3 = "b";

function checkQuestion1() {
  var selected = document.querySelector('input[name="q1"]:checked');

  if (selected && selected.value === correctAnswerQ1) {
    return 1;
  } else {
    return 0;
  }
}

function checkQuestion2() {
  var selected = document.querySelector('input[name="q2"]:checked');

  if (selected && selected.value === correctAnswerQ2) {
    return 1;
  } else {
    return 0;
  }
}

function checkQuestion3() {
  var selected = document.querySelector('input[name="q3"]:checked');

  if (selected && selected.value === correctAnswerQ3) {
    return 1;
  } else {
    return 0;
  }
}

function calculateScore() {
  var totalScore = 0;

  totalScore += checkQuestion1();
  totalScore += checkQuestion2();
  totalScore += checkQuestion3();

  return totalScore;
}

function showResult() {
  var score = calculateScore();
  var resultDiv = document.getElementById("result");

  var message = "";

  // Conditional statements based on score
  if (score === 0) {
    message = "Poor performance You need more practice.";
  } else if (score === 1 || score === 2) {
    message = "Good job Keep improving!";
  } else if (score === 3) {
    message = "Excellent Perfect score!";
  }

  // Display result dynamically
  resultDiv.innerHTML = "Your Score: " + score + "/3 <br>" + message;
}

function resetQuiz() {
  // Clear all selected radio buttons
  var radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(function (radio) {
    radio.checked = false;
  });

  // Clear result text
  document.getElementById("result").innerHTML = "";
}

document.getElementById("submitBtn").addEventListener("click", showResult);
document.getElementById("resetBtn").addEventListener("click", resetQuiz);
