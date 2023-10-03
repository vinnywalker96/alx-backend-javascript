const assert = require('assert');

function calculateNumber(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.ceil(b);

  return roundedA + roundedB;
}

module.exports = calculateNumber;

