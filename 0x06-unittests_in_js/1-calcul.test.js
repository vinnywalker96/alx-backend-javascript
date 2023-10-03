const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    assert.equal(result, 6);
  });

  it('', () => {
	  const result = calculateNumber('SUBTRACT', 1.4, 4.5);
	  assert.equal(result, -4);
  });

  it('', () => {
	  const result = calculateNumber('DIVIDE', 1.4, 4.5);
	  assert.equal(result, 0.2);
  });

  it('', () => {
	  const result = calculateNumber('DIVIDE', 1.4, 0);
	  assert.equal(result, 'Error');
  });
});

