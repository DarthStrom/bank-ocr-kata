var ocr = require('./bank-ocr');

describe('ocr', function () {

  it('recognizes zero', function () {
    expect(ocr.convert(
        " _ \n" +
        "| |\n" +
        "|_|\n" +
        "   "
    )).toBe('0');
  });

  it('recognizes one', function () {
    expect(ocr.convert(
        "   \n" +
        "  |\n" +
        "  |\n" +
        "   "
    )).toBe('1');
  });

  it('converts a line of zeroes', function () {
    expect(ocr.convert(
        " _  _  _  _  _  _  _  _  _ \n" +
        "| || || || || || || || || |\n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        "                           "
    )).toBe('000000000');
  });

  it('can parse multiple entries', function () {
    expect(ocr.convert(
        "                           \n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        " _| _| _| _| _| _| _| _| _|\n" +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ \n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        " _| _| _| _| _| _| _| _| _|\n" +
        " _| _| _| _| _| _| _| _| _|\n" +
        "                           \n" +
        "                           \n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ \n" +
        " _| _| _| _| _| _| _| _| _|\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ \n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        " _| _| _| _| _| _| _| _| _|\n" +
        "                           "
    )).toBe(
      "111111111\n" +
      "222222222\n" +
      "333333333\n" +
      "444444444\n" +
      "555555555\n" +
      "666666666\n" +
      "777777777\n" +
      "888888888\n" +
      "999999999");
  });

  it('can validate an account number', function () {
    expect(ocr.isValid('345882865')).toBe(true);
  });

  it('can detect an invalid account number', function () {
    expect(ocr.isValid('987654321')).toBe(false);
  });
});
