// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
	const totalLength = n + (n - 1);
	for (let i = 1; i <= n; i++) {
		let str = '';
		const maxRowCharacter = i + (i - 1);
		const paddingEachSide = (totalLength - maxRowCharacter) / 2;
		for (let j = 1; j <= totalLength; j++) {
			if (j > paddingEachSide && j <= maxRowCharacter + paddingEachSide) {
				str += '#';
			} else {
				str += ' ';
			}
		}
		console.log(str);
	}
}

module.exports = pyramid;
