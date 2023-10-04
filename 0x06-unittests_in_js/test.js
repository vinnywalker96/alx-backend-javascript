const sinon = require('sinon');

const once = (fn) => {
	let val;
	let called = false;
	return () => {
		if (!called) {
			called = true;
			val = fn.apply(this, arguments);
		}
		return val;
	};
}

