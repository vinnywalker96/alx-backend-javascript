const { describe, it } = require('mocha');
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
    it('should return a resolved promise with success message when success is true', function () {
        return getPaymentTokenFromAPI(true).then(response => {
            assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        });
    });

    it('should return a resolved promise with undefined when success is false', function () {
        return getPaymentTokenFromAPI(false).then(response => {
            assert.strictEqual(response, undefined);
        });
    });
});

