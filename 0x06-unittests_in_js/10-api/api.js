const express = require('express');

const app = express()
const port = 7865

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system')
});

app.get('/cart/:id([0-9]+)', (request, response) => {
  response.send(`Payment methods for cart ${request.params.id}`);
});

app.get('/available_payments', (req, res) => {
    payments = {
        payment_methods: {
            credit_card: true,
            paypal: false
        }
    }
    res.json(payments);
})

app.post('/login', (req, res) => {
    const username = req.body.userName
    res.send(`Welcome ${username}`);
})

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`)
});
module.exports = app;
