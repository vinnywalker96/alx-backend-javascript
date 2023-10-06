
const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const endpoint = 'http://localhost:7865';

  it('Returns status of 200 Ok', function (done) {
    request(endpoint, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });

    it('Returns the right content', function (done) {
        request(endpoint, function (error, response, body) {
          expect(body).to.equal('Welcome to the payment system');
          done();
        });
      });
  });
});