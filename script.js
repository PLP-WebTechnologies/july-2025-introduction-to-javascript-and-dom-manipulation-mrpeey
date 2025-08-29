// Part 1: Variable declarations and conditionals
// ---------------------------------------------
let userAge = 45;
let userName = "Poulo";
let accessGranted = false;

const ageLimit = 18;

if (userAge >= ageLimit) {
  accessGranted = true;
} else {
  accessGranted = false;
}

document.getElementById('variable-display').textContent = `User ${userName} is ${userAge} years old. Access granted: ${accessGranted}`;

// Part 2: Custom functions
// -----------------------

/**
 * Function that greets a user by name.
 * @param {string} name
 * @returns {string}
 */
function greetUser(name) {
  return `Hello, ${name}! Welcome to the page.`;
}

/**
 * Function that calculates the sum of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sumNumbers(a, b) {
  return a + b;
}

// Part 3: Loop examples
// ---------------------

/**
 * Loop example 1: Print numbers 1 through 5
 */
function loopNumbers() {
  let result = "Numbers: ";
  for(let i = 1; i <= 5; i++) {
    result += i + " ";
  }
  return result.trim();
}

/**
 * Loop example 2: Print even numbers from 2 to 10
 */
function loopEvenNumbers() {
  let result = "Even numbers: ";
  let i = 2;
  while(i <= 10) {
    result += i + " ";
    i += 2;
  }
  return result.trim();
}

// Part 4: DOM interactions
// -----------------------

const btnRunFunctions = document.getElementById('btn-run-functions');
const btnLoop1 = document.getElementById('btn-loop1');
const btnLoop2 = document.getElementById('btn-loop2');

const functionOutput = document.getElementById('function-output');
const loopOutput = document.getElementById('loop-output');
const header = document.getElementById('header');

// Change header color on page load
header.style.color = "teal";

// Event listener to greet user and sum numbers
btnRunFunctions.addEventListener('click', () => {
  const greeting = greetUser(userName);
  const sum = sumNumbers(10, 15);
  functionOutput.textContent = `${greeting} Sum of 10 and 15 is ${sum}.`;
});

// Event listener for loop example 1
btnLoop1.addEventListener('click', () => {
  loopOutput.textContent = loopNumbers();
});

// Event listener for loop example 2
btnLoop2.addEventListener('click', () => {
  loopOutput.textContent = loopEvenNumbers();
});
