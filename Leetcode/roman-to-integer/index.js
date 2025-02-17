function romanToInt(s) {
	// Write your solution here.
	// Create a roman numeral map with proper key-value pairs.
	const romanMap = new Map([
		['I', 1],
		['V', 5],
		['X', 10],
		['L', 50],
		['C', 100],
		['D', 500],
		['M', 1000],
	]);

	let total = 0;

	for (let i = 0; i < s.length; i++) {
		const currentValue = romanMap.get(s[i]);
		const nextValue = romanMap.get(s[i + 1]) || 0;
		if (currentValue >= nextValue) {
			total += currentValue;
		} else {
			total -= currentValue;
		}
	}

	return total;
}

module.exports = romanToInt;
