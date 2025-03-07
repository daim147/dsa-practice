// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	return (str.match(/[aeiou]/gi) || []).length;
}

function vowelsIterative(str) {
	let vowelsCount = 0;
	for (let i of str.toLowerCase()) {
		if ('aeiou'.includes(i)) {
			vowelsCount++;
		}
	}

	return vowelsCount;
}

module.exports = vowels;
