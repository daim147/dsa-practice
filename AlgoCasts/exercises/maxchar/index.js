// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const strMap = new Map();
	for (let char of str) {
		strMap.set(char, strMap.get(char) + 1 || 1);
	}

	return [...strMap].reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}

console.log(maxChar('abcccccccd'));

module.exports = maxChar;
