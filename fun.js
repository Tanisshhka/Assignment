// fun.js

function checkPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word.toLowerCase() === reversed.toLowerCase();
}

function countVowels(word) {
  const matches = word.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = { checkPalindrome, countVowels };
