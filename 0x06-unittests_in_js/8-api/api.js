const express = require('express');
const app = express();
const port = 7865;
const hostname = '172.17.0.2';

app.get('/', (res, req) => {
	res.send('Welcome to the payment system');
});

app.listen(port, hostname,  () => {
	console.log(`API available on localhost port ${port}`);
});

module.exports = app;
