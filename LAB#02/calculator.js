function calculate() {
  let number1 = parseFloat(document.getElementById("num1").value);
  let number2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  let resultBox = document.getElementById("resultBox");

  // Input validation
  if (isNaN(number1) || isNaN(number2)) {
    resultBox.innerHTML = "Please enter valid numbers.";
    resultBox.style.backgroundColor = "orange";
    return;
  }

  let result;

  if (operation === "add") {
    result = number1 + number2;
  } else if (operation === "subtract") {
    result = number1 - number2;
  } else if (operation === "multiply") {
    result = number1 * number2;
  } else if (operation === "divide") {
    if (number2 === 0) {
      resultBox.innerHTML = "Error: Cannot divide by zero!";
      resultBox.style.backgroundColor = "red";
      return;
    }

    result = number1 / number2;
  }

  resultBox.innerHTML = "Result: " + result;

  // Bonus: Change background color
  if (result > 0) {
    resultBox.style.backgroundColor = "lightgreen";
  } else if (result < 0) {
    resultBox.style.backgroundColor = "lightcoral";
  } else {
    resultBox.style.backgroundColor = "lightgray";
  }
}
