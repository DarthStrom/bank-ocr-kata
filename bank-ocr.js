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
      return parseInt(digit, 10);
    }
  }
}

exports.convert = function (text) {
  return getDigit(text.replace(/\n/gm, ''));
};
