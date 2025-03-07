// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// In this approach will iterate over string check if left character is space (' ') than capitalize it.
function capitalize(str) {
	let result = str[0].toUpperCase();

	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === ' ') {
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}

	return result;
}

// In this approach split the string by space convert into array than map through array and capitalize each item and than join
// function capitalize(str) {
// 	return str
// 		.split(' ')
// 		.map((s) => s[0].toUpperCase() + s.slice(1))
// 		.join(' ');
// }

module.exports = capitalize;
