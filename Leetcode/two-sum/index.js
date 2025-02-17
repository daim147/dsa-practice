/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let result = new Map();

	for (let i = 0; i < nums.length; i++) {
		let difference = target - nums[i];
		if (result.has(difference)) {
			return [i, result.get(difference)];
		} else {
			result.set(nums[i], i);
		}
	}

	return null;
};

module.exports = twoSum;
