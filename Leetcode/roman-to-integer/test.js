const romanToInt = require('./index');

describe('Roman to Integer', () => {
	test('Example 1: "III" returns 3', () => {
		expect(romanToInt('III')).toBe(3);
	});

	test('Example 2: "LVIII" returns 58', () => {
		expect(romanToInt('LVIII')).toBe(58);
	});

	test('Example 3: "MCMXCIV" returns 1994', () => {
		expect(romanToInt('MCMXCIV')).toBe(1994);
	});

	// Additional test cases
	test('Single numeral: "I" returns 1', () => {
		expect(romanToInt('I')).toBe(1);
	});

	test('Subtraction case: "IV" returns 4', () => {
		expect(romanToInt('IV')).toBe(4);
	});

	test('Subtraction in larger numeral: "XC" returns 90', () => {
		expect(romanToInt('XC')).toBe(90);
	});

	// ...additional test cases...
});
