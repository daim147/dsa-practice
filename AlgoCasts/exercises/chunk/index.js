// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const chunk = [];
	let index = 0;

	while (index < array.length) {
		chunk.push(array.slice(index, index + size));
		index += size;
	}

	return chunk;
}

// function chunk(array, size) {
// 	const chunk = [];

// 	for (let element of array) {
// 		const last = chunk.at(-1);
// 		if (!last || last.length === size) {
// 			chunk.push([element]);
// 		} else {
// 			last.push(element);
// 		}
// 	}

// 	return chunk;
// }

// function chunk(array, size) {
// 	const iteration = Math.ceil(array.length / size);
// 	const finalArray = [];

// 	for (let i = 1; i <= iteration; i++) {
// 		const arrayChunk = [];
// 		arrayChunk.push(...array.slice((i - 1) * size, i * size));
// 		finalArray.push(arrayChunk);
// 	}
// 	return finalArray;
// }

// function chunk(array, size) {
// 	const iteration = Math.ceil(array.length / size);
// 	const finalArray = [];

// 	for (let i = 1; i <= iteration; i++) {
// 		const chunk = [];

// 		for (let j = size * (i - 1); j < size * i; j++) {
// 			const value = array[j];
// 			if (value !== undefined) chunk.push(value);
// 		}

// 		finalArray.push(chunk);
// 	}
// 	return finalArray;
// }

// function chunk(array, size) {
// 	const iteration = Math.ceil(array.length / size);
// 	const finalArray = [];
// 	for (let i = 1; i <= iteration; i++) {
// 		const chunk = [];
// 		for (let j = 0; j < size; j++) {
// 			const value = array[j + size * (i - 1)];
// 			if (value !== undefined) chunk.push(value);
// 		}
// 		finalArray.push(chunk);
// 	}
// 	return finalArray;
// }
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunked = chunk(arr, 3);
module.exports = chunk;
