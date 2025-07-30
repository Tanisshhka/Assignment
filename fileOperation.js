// fileOperations.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

function readFileData() {
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log('File Content:\n', data);
}

function appendFileData() {
  fs.appendFileSync(filePath, '\nThis is Appended data');
  console.log('Data appended successfully.');
}

module.exports = { readFileData, appendFileData };
