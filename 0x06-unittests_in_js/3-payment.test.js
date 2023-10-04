const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use the Utils.calculateNumber function correctly', () => {
    const calculateNumberSpy = sinon.spy(Utils.calculateNumber);

    sendPaymentRequestToApi(100, 20);

    assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);

    assert.equal(calculateNumberSpy.returnValue, 120);

    sinon.restore(calculateNumberSpy);
  });
});

