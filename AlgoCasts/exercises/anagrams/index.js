// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	return sanitizeAndSortString(stringA) === sanitizeAndSortString(stringB);
}

function sanitizeAndSortString(str) {
	return str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
}

// function anagrams(stringA, stringB) {
// 	const sanitizeStringA = stringA.replace(/\W/g, '').toLowerCase();
// 	const sanitizeStringB = stringB.replace(/\W/g, '').toLowerCase();

// 	if (sanitizeStringA.length !== sanitizeStringB.length) return false;

// 	// Each character should exist in both strings with same quantity.
// 	// take length of any string start loop on it to store them in Map, length of both string will be same at this point
// 	const stringAMap = new Map();
// 	const stringBMap = new Map();

// 	for (let i = 0; i < sanitizeStringA.length; i++) {
// 		stringAMap.set(sanitizeStringA[i], stringAMap.get(sanitizeStringA[i]) + 1 || 1);
// 		stringBMap.set(sanitizeStringB[i], stringBMap.get(sanitizeStringB[i]) + 1 || 1);
// 	}

// 	let isAnagram = true;

// 	stringAMap.forEach((value, key) => {
// 		if (stringBMap.get(key) !== value) {
// 			isAnagram = false;
// 			return;
// 		}
// 	});

// 	return isAnagram;
// }

module.exports = anagrams;
