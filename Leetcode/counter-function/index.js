function createCounter(n) {
	let count = n;
	return function () {
		return count++;
	};
}

module.exports = createCounter;
