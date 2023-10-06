const chai = require("chai");
const request = require("supertest");
const app = require('./api');
const expect = chai.expect;

describe('Index page', () => {
        it('Should  return  200 OK', async () => {
            const response = await request(app)
            .get("/")
            .expect(200);
        });
        it('Should return content of Welcome to the payment system', async () => {
            const response = await request(app)
            .get('/');

            const body = response.body;
            chai.assert(body, 'Welcome to the payment system');
        })
});