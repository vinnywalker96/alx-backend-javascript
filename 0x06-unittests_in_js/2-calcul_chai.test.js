const assert = require('assert');
const calculateNumber = require('./2-calcul_chai.js');
const expect = require('chai').expect

describe('calculateNumber', () => {
  it('', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
	expect(result).to.equal(6);
  });

  it('', () => {
	  const result = calculateNumber('SUBTRACT', 1.4, 4.5);
	  expect(result).to.equal(-4);
  });

  it('', () => {
	  const result = calculateNumber('DIVIDE', 1.4, 4.5);
	  expect(result).to.equal(0.2);
  });

  it('', () => {
	  const result = calculateNumber('DIVIDE', 1.4, 0);
	  expect(result).to.equal('Error');
  });
});

