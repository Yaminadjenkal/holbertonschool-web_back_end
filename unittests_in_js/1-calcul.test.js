// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for SUM(1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should handle rounding correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for SUBTRACT(1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should handle rounding correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 1.2), 5);
      assert.strictEqual(calculateNumber('SUBTRACT', 5.2, 1.8), 3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for DIVIDE(1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error'); // rounds to 0
    });

    it('should handle rounding correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.2), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 9.7, 2.6), 3.3333333333333335);
    });
  });
});

