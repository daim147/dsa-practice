// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
// 	const reversedString = str.split('').reduce((acc, val) => val + acc, '');
// 	return reversedString === str;
// }

function palindrome(str) {
	return str.split('').every((chr, i) => chr === str[str.length - 1 - i]);
}

console.log(palindrome('abba'));

module.exports = palindrome;

// For number
// var isPalindrome = function (x) {
// 	if (x < 0) return false;
// 	if (x < 10) return true;
// 	let r = x;
// 	let p = 0;
// 	let l = 0;
// 	const stack = [];
// 	while (r !== 0) {
// 		l = r % 10;
// 		r = Math.floor(r / 10);
// 		p = p * 10 + l;
// 	}

// 	return x === p;
// };
