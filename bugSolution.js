function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

function calculate(a, b, operation) {
  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid operation"; // Handle invalid operations gracefully
  }
}

console.log(calculate(10, 2, "+")); // 12
console.log(calculate(10, 2, "-")); // 8
console.log(calculate(10, 2, "*")); // 20
console.log(calculate(10, 2, "/")); // 5
console.log(calculate(10, 0, "/")); // throws error
console.log(calculate(10, 2, "%")); // Invalid operation