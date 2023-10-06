
const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const endpoint = 'http://localhost:7865';

  it('Returns status  code of 200 Ok',  (done) => {
    request(endpoint,  (error, response, body)  => {
      expect(response.statusCode).to.equal(200);
      done();
    });

    it('Returns Correct page constenr',  (done) => {
        request(endpoint,  (error, response, body) => {
          expect(body).to.equal('Welcome to the payment system');
          done();
        });
      });
  });
});