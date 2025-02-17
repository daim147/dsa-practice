const twoSum = require('./index'); // Adjust the path as necessary

function sortResult(result) {
	return result.sort((a, b) => a - b);
}

describe('Two Sum', () => {
	test('Example 1: [2,7,11,15] with target 9 returns [0,1]', () => {
		const result = twoSum([2, 7, 11, 15], 9);
		expect(sortResult(result)).toEqual([0, 1]);
	});

	test('Example 2: [3,2,4] with target 6 returns [1,2]', () => {
		const result = twoSum([3, 2, 4], 6);
		expect(sortResult(result)).toEqual([1, 2]);
	});

	test('Example 3: [3,3] with target 6 returns [0,1]', () => {
		const result = twoSum([3, 3], 6);
		expect(sortResult(result)).toEqual([0, 1]);
	});

	test('Minimal input: [1,2] with target 3 returns [0,1]', () => {
		const result = twoSum([1, 2], 3);
		expect(sortResult(result)).toEqual([0, 1]);
	});

	test('Negative numbers: [-3,4,3,90] with target 0 returns [0,2]', () => {
		const result = twoSum([-3, 4, 3, 90], 0);
		expect(sortResult(result)).toEqual([0, 2]);
	});

	test('Test with repeated elements: [2, 3, 4, 5] with target 8 returns [1,3]', () => {
		const result = twoSum([2, 3, 4, 5], 8);
		expect(sortResult(result)).toEqual([1, 3]);
	});
	// ...additional test cases...
});
