const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber was called once", function() {
	const test = sinon.stub(Utils, 'calculateNumber');

	sendPaymentRequestToApi(100, 20);
	assert(test.calledWith(100, 20);
	test.restore();
    });
});
