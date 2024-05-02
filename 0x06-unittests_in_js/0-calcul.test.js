const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(3.0, 4.0), 7);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.0, 2.4), 4);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(3.4, 3.4), 6);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(3.4, 2.0), 5);
  });

  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.0, 4.5), 7);
  });

  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(3.3, 6.1), 9);
  });

  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(4.2, 7.0), 11);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(5.499999, 4.499999), 9);
  });
});
