const num1 = parseFloat(prompt("ENTER THE FIRST NUMBER:"));
if (isNaN(num1)) {
  alert("Invalid number");
}

const num2 = parseFloat(prompt("ENTER THE SECOND NUMBER:"));
if (isNaN(num2)) {
  alert("Invalid number");
}

if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid number");
} else {
  const operator = prompt("ENTER AN OPERATOR (+, -, *, /, %)");
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        alert("You cannot divide by 0 i.e. ♾️");
      }
      break;

    case "%":
      result = num1 % num2;
      break;

    default:
      alert("Invalid Operator. Please use +, -, *, /, or %");
  }

  if (result !== undefined) {
    alert(`Result: ${result}`);
  }
}
