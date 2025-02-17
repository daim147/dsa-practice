// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
console.time('Start');

function reverse(str) {
	return str.split('').reduce((acc, value) => value + acc, '');
}

// function reverse(str) {
// 	return str.split('').reverse().join('');
// }

// function reverse(str) {
// 	let reverseString = '';
// 	for (let i of str) {
// 		reverseString = i + reverseString;
// 	}
// 	return reverseString;
// }

console.log(reverse('hello'));
console.timeEnd('Start');

module.exports = reverse;
