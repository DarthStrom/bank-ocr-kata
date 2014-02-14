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

function getDigits(entry) {
  var digits = [];
  var lines = entry.split('\n');
  for (var digitNumber = 0; digitNumber < lines[0].length; digitNumber += 3) {
    var digit = '';
    for (var lineNumber = 0; lineNumber < lines.length; lineNumber++) {
      digit += lines[lineNumber].substr(digitNumber, 3);
    }
    digits.push(digit);
  }
  return digits;
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

function getAccountNumber(entry) {
  var digits = getDigits(entry);
  return digits.map(getDigit).join('');
}

exports.convert = function (text) {
  var entries = getEntries(text);
  return entries.map(getAccountNumber).join('\n');
};
