/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
// var queryResults = function (limit, queries) {
// 	const BallsColors = new Map();
// 	const colorsSet = new Map();
// 	queries.forEach(([ball, color], index) => {
// 		BallsColors.set(ball, color);
// 		colorsSet.set(index, new Set(BallsColors.values()).size);
// 	});
// 	return Array.from(colorsSet.values());
// };

// var queryResults = function (limit, queries) {
// 	const ballMap = new Map();
// 	const colorMap = new Map();
// 	return queries.map(([ball, color]) => {
// 		if (ballMap.has(ball)) {
// 			const prevColor = ballMap.get(ball);
// 			colorMap.set(prevColor, colorMap.get(prevColor) - 1);
// 			if (colorMap.get(prevColor) === 0) colorMap.delete(prevColor);
// 		}
// 		ballMap.set(ball, color);
// 		colorMap.set(color, (colorMap.get(color) ?? 0) + 1);
// 		return colorMap.size; // Use `size` property, not `size()`
// 	});
// };
var queryResults = function (limit, queries) {
	const ballMap = {};
	return queries.map(([ball, color]) => {
		let colorExistId;
		Object.entries(ballMap).forEach(([id, clr]) => {
			if (clr === color) {
				colorExistId = id;
			}
		});
		if (colorExistId !== undefined) {
			delete ballMap[colorExistId];
		}
		ballMap[ball] = color;
		return Object.keys(ballMap).length;
	});
};

const queries = [
	[0, 1],
	[1, 2],
	[2, 2],
	[3, 4],
	[4, 5],
];
const output = [1, 2, 2, 3, 4];
console.log(queryResults(1, queries));

module.exports = queryResults;
