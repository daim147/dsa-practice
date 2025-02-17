const queryResults = require('./index');

test('Example 1', () => {
	const limit = 4;
	const queries = [
		[1, 4],
		[2, 5],
		[1, 3],
		[3, 4],
	];
	const output = [1, 2, 2, 3];
	expect(queryResults(limit, queries)).toEqual(output);
});

test('Example 2', () => {
	const limit = 4;
	const queries = [
		[0, 1],
		[1, 2],
		[2, 2],
		[3, 4],
		[4, 5],
	];
	const output = [1, 2, 2, 3, 4];
	expect(queryResults(limit, queries)).toEqual(output);
});

test('Single query', () => {
	const limit = 1;
	const queries = [[0, 1]];
	const output = [1];
	expect(queryResults(limit, queries)).toEqual(output);
});

test('No queries', () => {
	const limit = 5;
	const queries = [];
	const output = [];
	expect(queryResults(limit, queries)).toEqual(output);
});

test('Multiple queries with same color', () => {
	const limit = 3;
	const queries = [
		[0, 1],
		[1, 1],
		[2, 1],
		[3, 1],
	];
	const output = [1, 1, 1, 1];
	expect(queryResults(limit, queries)).toEqual(output);
});
test('Multiple queries with same color', () => {
	const limit = 3;
	const queries = [
		[0, 1],
		[0, 4],
		[1, 2],
		[1, 5],
		[1, 4],
	];

	const output = [1, 1, 2, 2, 1];

	expect(queryResults(limit, queries)).toEqual(output);
});
