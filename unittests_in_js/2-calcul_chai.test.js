// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber using Chai', () => {
  describe('SUM', () => {
    it('should return 6 for SUM(1.4, 4.5)', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle rounding correctly', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for SUBTRACT(1.4, 4.5)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle rounding correctly', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 1.2)).to.equal(5);
      expect(calculateNumber('SUBTRACT', 5.2, 1.8)).to.equal(3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for DIVIDE(1.4, 4.5)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error'); // rounds to 0
    });

    it('should handle rounding correctly', () => {
      expect(calculateNumber('DIVIDE', 5.5, 2.2)).to.equal(3);
      expect(calculateNumber('DIVIDE', 9.7, 2.6)).to.equal(3.3333333333333335);
    });
  });
});

