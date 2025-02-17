// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	return parseInt(String(n).split('').reverse().join('')) * Math.sign(n);
}
console.log(reverseInt(-9021));
module.exports = reverseInt;
