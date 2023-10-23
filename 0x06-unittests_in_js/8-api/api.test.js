const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('test the API', () => {
  it('test the API with status, body', (done) => {
    request('http://localhost:7865', 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
    done();
  });
});