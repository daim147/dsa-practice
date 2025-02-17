const createCounter = require('./index');

describe('createCounter', () => {
	test('should return a function', () => {
		expect(typeof createCounter(10)).toBe('function');
	});

	test('should return sequential counter values for n=10', () => {
		const counter = createCounter(10);
		expect(counter()).toBe(10);
		expect(counter()).toBe(11);
		expect(counter()).toBe(12);
	});

	test('should return sequential counter values for n=-2', () => {
		const counter = createCounter(-2);
		expect(counter()).toBe(-2);
		expect(counter()).toBe(-1);
		expect(counter()).toBe(0);
		expect(counter()).toBe(1);
		expect(counter()).toBe(2);
	});
});
