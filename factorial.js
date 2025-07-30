// factorial.js

function factorial(n) {
  if (n < 0) return undefined; // Negative ke liye undefined
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

module.exports = factorial;
