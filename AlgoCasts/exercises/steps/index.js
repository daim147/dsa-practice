// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 1, str = '') {
	if (row > n) return;

	if (str.length === n) {
		console.log(str);
		return steps(n, row + 1);
	}

	const add = str.length < row ? '#' : ' ';
	return steps(n, row, str + add);
}

// function steps(n, step = 1) {
// 	const str = '#'.repeat(step).padEnd(n, ' ');
// 	console.log(str);
// 	return step >= n ? null : steps(n, step + 1);
// }

// function steps(n) {
// 	for (let i = 1; i <= n; i++) {
// 		let str = '';

// 		for (let j = 1; j <= n; j++) {
// 			if (j <= i) {
// 				str += '#';
// 			} else {
// 				str += ' ';
// 			}
// 		}
// 		console.log(str);
// 	}
// }
// function steps(n) {
// 	for (let i = 1; i <= n; i++) {
// 		const str = '#'.repeat(i).padEnd(n, ' ');
// 		console.log(str);
// 	}
// }

module.exports = steps;
