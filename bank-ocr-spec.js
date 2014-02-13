var ocr = require('./bank-ocr');

describe('ocr', function () {

  it('recognizes zero', function () {
    expect(ocr.convert(
        " _ \n" +
        "| |\n" +
        "|_|\n" +
        "   "
    )).toBe(0);
  });

  it('recognizes one', function () {
    expect(ocr.convert(
        "   \n" +
        "  |\n" +
        "  |\n" +
        "   "
    )).toBe(1);
  });
});
