const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('', () => {
    const result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });

  it('', () => {
	  const result = calculateNumber(1, 3.7);
	  assert.equal(result, 5);
  });

  it('', () => {
	  const result = calculateNumber(1.2, 3.7);
	  assert.equal(result, 5);
  });

  it('', () => {
	  const result = calculateNumber(1.5, 3.7);
	  assert.equal(result, 6);
  });
});

