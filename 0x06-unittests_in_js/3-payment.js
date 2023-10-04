const Utils = require('./utils.js');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
	let sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
	console.log(`The total is: ${sum}`)
};

module.exports = sendPaymentRequestToApi
