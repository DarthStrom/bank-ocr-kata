'use strict';

var PATTERNS = {
  0: [" _ ",
      "| |",
      "|_|",
      "   "],
  1: ["   ",
      "  |",
      "  |",
      "   "],
  2: [" _ ",
      " _|",
      "|_ ",
      "   "],
  3: [" _ ",
      " _|",
      " _|",
      "   "],
  4: ["   ",
      "|_|",
      "  |",
      "   "],
  5: [" _ ",
      "|_ ",
      " _|",
      "   "],
  6: [" _ ",
      "|_ ",
      "|_|",
      "   "],
  7: [" _ ",
      "  |",
      "  |",
      "   "],
  8: [" _ ",
      "|_|",
      "|_|",
      "   "],
  9: [" _ ",
      "|_|",
      " _|",
      "   "]
};

function getDigit(pattern) {
  for (var digit in PATTERNS) {
    if (PATTERNS[digit].join('') === pattern) {
      return digit;
    }
  }
}

function getPatterns(entry) {
  var patterns = [];
  var lines = entry.split('\n');
  for (var patternNumber = 0; patternNumber < lines[0].length; patternNumber += 3) {
    var pattern = '';
    for (var lineNumber = 0; lineNumber < lines.length; lineNumber++) {
      pattern += lines[lineNumber].substr(patternNumber, 3);
    }
    patterns.push(pattern);
  }
  return patterns;
}

function getAccountNumber(entry) {
  var patterns = getPatterns(entry);
  return patterns.map(getDigit).join('');
}

function getEntries(text) {
  var entries = [];
  var lines = text.split("\n");
  for (var entryNumber = 0; entryNumber < lines.length; entryNumber += 4) {
    var entry = '';
    for (var entryLine = 0; entryLine < 4; entryLine++) {
      entry += lines[entryNumber + entryLine] + "\n";
    }
    entries.push(entry);
  }
  return entries;
}

exports.convert = function (text) {
  var entries = getEntries(text);
  return entries.map(getAccountNumber).join('\n');
};

exports.isValid = function(accountNumber) {
  var digits = accountNumber.split('');
  var sum = 0;
  for (var i = 0; i < 9; i++) {
    sum += (9 - i) * digits[i];
  }
  return sum % 11 === 0;
};
