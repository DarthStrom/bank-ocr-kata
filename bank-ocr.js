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

function splitIntoDigits(text) {
  var digits = [];
  var lines = text.split('\n');
  for (var digitNumber = 0; digitNumber < lines[0].length; digitNumber += 3) {
    var digit = '';
    for (var lineNumber = 0; lineNumber < lines.length; lineNumber++) {
      digit += lines[lineNumber].substr(digitNumber, 3);
    }
    digits.push(digit);
  }
  return digits;
}

exports.convert = function (text) {
  var digits = splitIntoDigits(text);
  return digits.map(getDigit).join('');
};
