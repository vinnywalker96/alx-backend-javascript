const sinon = require('sinon');
const {describe, it} = require("mocha");
const sendPaymentRequestToApi = require("./5-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
	let calculateStub;
	let consoleSpy;

	beforeEach(() => {
		calculateStub =  sinon.stub(Utils, 'calculateNumber');
		consoleSpy = sinon.spy(console, 'log');

	});

	afterEach(() => {
		calculateStub.restore();
		consoleSpy.restore();

	});
	
    it("check that Utils.calculateNumber was called once", function() {
		calculateStub.withArgs('SUM', 100, 20).returns(120);
		sendPaymentRequestToApi(100, 20);
		assert(consoleSpy.withArgs('The total is: 120').calledOnce);
		assert(calculateStub.withArgs('SUM', 100, 20).calledOnce);
	});
	
	it("checks that Utils.calculatNumber was called Once", function() {
		calculateStub.withArgs('SUM', 10, 10).returns(20);
		sendPaymentRequestToApi(10, 10);
		assert(consoleSpy.withArgs('The total is: 20').calledOnce);
		assert(calculateStub.withArgs('SUM', 10, 10).calledOnce);
	});

});

