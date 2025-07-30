const isPrime = require('./isprime');

const numbers = [2, 10, 17, 21];

numbers.forEach(num => {
    console.log(`${num} is ${isPrime(num) ? "Prime" : "Not Prime"}`);
});
// index.js for Ques 02
// Code for Next question that is to find factorial, for  output of factorial.js file, comment the code given upside
const factorial = require('./factorial');

console.log(`Factorial of 5 is: ${factorial(5)}`);
console.log(`Factorial of 7 is: ${factorial(7)}`);
console.log(`Factorial of 10 is: ${factorial(10)}`);

// index.js for Ques 03
const { readFileData, appendFileData } = require('./fileOperations');

console.log('--- Reading Original File Content ---');
readFileData();

console.log('\n--- Appending Data ---');
appendFileData();

console.log('\n--- Reading Updated File Content ---');
readFileData(); 


// index.js for ques 04 , to run boxel comment the upside code using [*/ start --- /*end]

const boxen = require('boxen');

const message = "I am using my first external module!";
const title = "Hurray!!!";

// Classic box (default)
const classicBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: 'classic',
});

// SingleDouble border
const singleDoubleBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: 'singleDouble',
});

// Rounded box
const roundBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: 'round',
});

console.log(classicBox);
console.log(singleDoubleBox);
console.log(roundBox);

// index.js for Ques 05 

const randomWords = require('random-words');
const { checkPalindrome, countVowels } = require('./fun');

const words = randomWords(5); // Generate 5 random words

words.forEach((word, index) => {
  const isPalin = checkPalindrome(word);
  const vowelCount = countVowels(word);

  console.log(`word ${index + 1} -> ${word} -> vowelsCount: ${vowelCount} -> isPalindrome: ${isPalin}`);
});

// index.js for Ques 06
const sum = require('./sum');
const multiply = require('./multiply');
const divide = require('./divide');
const subtract = require('./subtract');

const a = 10;
const b = 5;

console.log(`Sum: ${sum(a, b)}`);
console.log(`Multiply: ${multiply(a, b)}`);
console.log(`Divide: ${divide(a, b)}`);
console.log(`Subtract: ${subtract(a, b)}`);

