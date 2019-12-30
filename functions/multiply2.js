function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  let number = parseFloat(readlineSync.question(prompt));
  return number;
}

function multiply(a, b) {
  return a * b;
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');

console.log(
  `${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`
);
