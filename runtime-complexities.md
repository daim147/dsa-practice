# Algorithm Runtime Complexities

## Introduction

Runtime complexity explains how the efficiency of an algorithm changes as the input size grows. It's like measuring how well your code scales when dealing with more data.

## Big O Notation

Big O notation is a way to describe the performance or complexity of an algorithm. It specifically describes the worst-case scenario, providing an upper limit on the resources (time or space) an algorithm might require.

### Common Time Complexities

| Notation   | Name         | Description                                        |
| ---------- | ------------ | -------------------------------------------------- |
| O(1)       | Constant     | Runtime is independent of input size               |
| O(log n)   | Logarithmic  | Runtime grows logarithmically with input size      |
| O(n)       | Linear       | Runtime grows linearly with input size             |
| O(n log n) | Linearithmic | Common in efficient sorting algorithms             |
| O(n²)      | Quadratic    | Runtime grows with square of input size            |
| O(n³)      | Cubic        | Runtime grows with cube of input size              |
| O(2^n)     | Exponential  | Runtime doubles with each additional input element |
| O(n!)      | Factorial    | Runtime grows factorially with input size          |

## Simplified Definitions and Examples

### O(1) - Constant Time

**Simple Definition**: The algorithm takes the same amount of time, no matter how much data you give it. It's like flipping a light switch - it takes the same effort whether you're lighting up a closet or a stadium.

**In Plain Terms**:

- The number of operations is fixed.
- The input size doesn't affect the execution time.
- Examples: Accessing an array element by index, checking if a number is even or odd.

**Real-Life Analogy**: Getting a specific item from a vending machine - the time it takes is the same whether the machine has 10 items or 100.

**Multiple Examples**:

```javascript
// Example 1: Checking if a number is even or odd - O(1) time, O(1) space
function isEven(number) {
	return number % 2 === 0; // Always one operation
}

// Example 2: Array access by index - O(1) time, O(1) space
function getElementAt(array, index) {
	return array[index]; // O(1) - instant access regardless of array size
}

// Example 3: Hash map/object property access - O(1) time (average), O(1) space
function getUserName(user) {
	return user.name; // O(1) - immediate property access
}

// Example 4: Stack operations - O(1) time, O(1) space
function pushToStack(stack, item) {
	stack.push(item); // O(1) - adding to the top of a stack
	return stack;
}
```

### O(log n) - Logarithmic Time

**Simple Definition**: The algorithm becomes more efficient as the input grows. Each step reduces the problem size significantly. It's like looking up a word in a dictionary - you don't check every page; you split the book and narrow down your search quickly.

**In Plain Terms**:

- Each step cuts the problem approximately in half.
- Very efficient even with large inputs.
- The bigger the input, the less each additional piece matters.
- Examples: Binary search, finding an element in a balanced BST.

**Real-Life Analogy**: Finding a specific page in a book by repeatedly halving the search space.

**Multiple Examples**:

```javascript
// Example 1: Finding a number in a sorted array - O(log n) time, O(1) space (iterative)
function binarySearch(sortedArray, target) {
	let left = 0;
	let right = sortedArray.length - 1;

	while (left <= right) {
		// Find the middle element
		let middle = Math.floor((left + right) / 2);

		// Found the target
		if (sortedArray[middle] === target) return middle;

		// Target is in the right half
		if (sortedArray[middle] < target) left = middle + 1;
		// Target is in the left half
		else right = middle - 1;
	}

	return -1; // Not found
}

// Example 2: Finding an element in a balanced BST - O(log n) time, O(log n) space (recursive call stack)
function findInBST(root, value) {
	if (!root) return null;
	if (root.value === value) return root;
	if (value < root.value) return findInBST(root.left, value);
	return findInBST(root.right, value);
}

// Example 3: Count digits in a number - O(log n) time, O(1) space
function countDigits(number) {
	if (number === 0) return 1;
	return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// Example 4: Power calculation with binary exponentiation - O(log n) time, O(log n) space (recursive call stack)
function fastPower(base, exponent) {
	if (exponent === 0) return 1;
	if (exponent % 2 === 0) {
		const half = fastPower(base, exponent / 2);
		return half * half;
	} else {
		return base * fastPower(base, exponent - 1);
	}
}
```

**Visual representation**:

```
n = 16 elements
1st comparison: 8 elements remaining
2nd comparison: 4 elements remaining
3rd comparison: 2 elements remaining
4th comparison: 1 element remaining (found!)
Log₂(16) = 4 steps
```

### O(n) - Linear Time

**Simple Definition**: The time grows directly with the input size. If the input doubles, the time doubles. It's like reading a book - reading two books takes twice as long as reading one.

**In Plain Terms**:

- You need to process each input item exactly once.
- The time increases at the same rate as the input size.
- Examples: Finding the maximum value, summing an array, linear search.

**Real-Life Analogy**: Counting the number of students in a classroom - you have to look at each student once.

**Multiple Examples**:

```javascript
// Example 1: Finding the maximum value in an array - O(n) time, O(1) space
function findMax(array) {
	if (array.length === 0) return null;

	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > max) max = array[i];
	}
	return max; // Checks each element once
}

// Example 2: Linear search - O(n) time, O(1) space
function linearSearch(array, target) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) return i;
	}
	return -1; // Not found
}

// Example 3: Computing array sum - O(n) time, O(1) space
function arraySum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

// Example 4: String reversal - O(n) time, O(n) space (new string)
function reverseString(str) {
	let reversed = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
}
```

### O(n log n) - Linearithmic Time

**Simple Definition**: A combination of linear and logarithmic behavior. It's like sorting a deck of cards - you need to look through all cards (linear), but you can make decisions that eliminate multiple possibilities at once (logarithmic).

**In Plain Terms**:

- More efficient than checking all possible combinations.
- Usually involves dividing the data and processing each part.
- Common in sorting algorithms that work by comparisons.
- Examples: Merge sort, quicksort, heap sort.

**Real-Life Analogy**: Organizing a library - you first sort books into categories (linear), then alphabetize within each category (logarithmic).

**Multiple Examples**:

```javascript
// Example 1: Simple explanation of merge sort concept - O(n log n) time, O(n) space
function mergeSort(array) {
	// Base case: arrays with 0 or 1 element are already sorted
	if (array.length <= 1) return array;

	// Split the array in half
	const middle = Math.floor(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	// Recursively sort both halves and combine them
	return merge(mergeSort(left), mergeSort(right));
}

// Example 2: Quick sort - O(n log n) average, O(n^2) worst time, O(log n) space (average call stack)
function quickSort(array) {
	if (array.length <= 1) return array;

	const pivot = array[Math.floor(array.length / 2)];
	const left = array.filter((x) => x < pivot);
	const middle = array.filter((x) => x === pivot);
	const right = array.filter((x) => x > pivot);

	return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example 3: Heap sort (conceptual) - O(n log n) time, O(1) space
function heapSort(array) {
	// Build max heap - O(n)
	buildMaxHeap(array);

	// Extract elements one by one - O(n log n)
	for (let i = array.length - 1; i > 0; i--) {
		// Swap first (max) with last unsorted element
		[array[0], array[i]] = [array[i], array[0]];
		// Restore heap property for remaining elements
		heapify(array, 0, i);
	}
	return array;
}

// Example 4: Finding the k closest points to the origin - O(n log n) time, O(n) space
function kClosest(points, k) {
	// Calculate distance for each point - O(n)
	// Then sort by distance - O(n log n)
	return points
		.map((point) => {
			const [x, y] = point;
			return { point, distance: x * x + y * y };
		})
		.sort((a, b) => a.distance - b.distance)
		.slice(0, k)
		.map((item) => item.point);
}
```

### O(n²) - Quadratic Time

**Simple Definition**: The time grows with the square of the input size. If the input doubles, the time increases four times. It's like checking every possible pair of items in a list.

**In Plain Terms**:

- Usually involves comparing each element with every other element.
- Contains nested loops where both loops go through the data.
- Becomes very slow with large inputs.
- Examples: Bubble sort, finding duplicate values in an array.

**Real-Life Analogy**: Organizing a party where each guest has to shake hands with every other guest.

**Multiple Examples**:

```javascript
// Example 1: Finding duplicate values in an array - O(n^2) time, O(1) space
function findDuplicates(array) {
	const duplicates = [];

	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			// Compare each element with every other element
			if (array[i] === array[j] && !duplicates.includes(array[i])) {
				duplicates.push(array[i]);
			}
		}
	}

	return duplicates;
}

// Example 2: Bubble sort - O(n^2) time, O(1) space
function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap
			}
		}
	}
	return array;
}

// Example 3: Finding all pairs in an array - O(n^2) time, O(n^2) space (if storing all pairs)
function findAllPairs(array) {
	const pairs = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			pairs.push([array[i], array[j]]);
		}
	}
	return pairs;
}

// Example 4: Simple matrix multiplication - O(n^3) time, O(n^2) space (result matrix)
function multiplyMatrices(a, b) {
	const result = Array(a.length)
		.fill()
		.map(() => Array(b[0].length).fill(0));
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b[0].length; j++) {
			for (let k = 0; k < a[0].length; k++) {
				result[i][j] += a[i][k] * b[k][j];
			}
		}
	}
	return result;
}
```

### O(2^n) - Exponential Time

**Simple Definition**: The time doubles with each additional element in the input. It's like trying every possible combination of items - adding just one more item doubles your work.

**In Plain Terms**:

- Growth rate is very rapid.
- Often seen in recursive algorithms that solve problems by trying all possibilities.
- Becomes impractical even for moderate input sizes.
- Examples: Recursive Fibonacci calculation, generating all subsets of a set.

**Real-Life Analogy**: Trying every possible combination to crack a password - each additional character makes the task exponentially harder.

**Multiple Examples**:

```javascript
// Example 1: Recursive calculation of Fibonacci numbers (naive approach) - O(2^n) time, O(n) space (call stack)
function fibonacci(n) {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example 2: Generating all subsets of a set (power set) - O(2^n) time, O(2^n) space
function generatePowerSet(array) {
	const powerSet = [];
	const totalSets = Math.pow(2, array.length);

	// Generate each possible subset
	for (let i = 0; i < totalSets; i++) {
		const subset = [];
		for (let j = 0; j < array.length; j++) {
			// If the jth bit is set in i, include the jth element
			if ((i & (1 << j)) !== 0) {
				subset.push(array[j]);
			}
		}
		powerSet.push(subset);
	}

	return powerSet;
}

// Example 3: Solving the Traveling Salesman Problem naively - O(n! * n) time, O(n) space
function tspNaive(graph, start) {
	const vertices = Object.keys(graph);
	const n = vertices.length;
	if (n <= 2) return 0; // Base case

	let minPath = Infinity;
	// Generate all permutations of vertices (except start)
	const otherVertices = vertices.filter((v) => v !== start);
	const permutations = getAllPermutations(otherVertices);

	for (const perm of permutations) {
		let currentPathWeight = 0;
		let k = start;

		for (const next of perm) {
			currentPathWeight += graph[k][next];
			k = next;
		}
		currentPathWeight += graph[k][start]; // Return to start

		minPath = Math.min(minPath, currentPathWeight);
	}

	return minPath;
}
```

### O(n!) - Factorial Time

**Simple Definition**: The time grows factorially with the input size. This is one of the most extreme growth rates, making it impractical for all but the smallest inputs.

**In Plain Terms**:

- The number of operations is proportional to the factorial of the input size.
- Involves generating all possible permutations or arrangements.
- Quickly becomes unmanageable as the input grows.

**Real-Life Analogy**: Trying to arrange a set of books in every possible order on a shelf.

**Multiple Examples**:

```javascript
// Example 1: Generating all permutations of a string - O(n!) time, O(n) space (call stack)
function stringPermutations(str) {
	if (str.length <= 1) return [str];

	const permutations = [];
	for (let i = 0; i < str.length; i++) {
		const firstChar = str[i];
		const remainingChars = str.substring(0, i) + str.substring(i + 1);
		const subPermutations = stringPermutations(remainingChars);

		for (const subPermutation of subPermutations) {
			permutations.push(firstChar + subPermutation);
		}
	}
	return permutations;
}

// Example 2: Solving the Traveling Salesman Problem by brute force - O(n!) time, O(n) space
function tspBruteForce(graph, start) {
	const vertices = Object.keys(graph);
	const n = vertices.length;
	if (n <= 2) return 0; // Base case

	let minPath = Infinity;
	// Generate all permutations of vertices (except start)
	const otherVertices = vertices.filter((v) => v !== start);
	const permutations = getAllPermutations(otherVertices);

	for (const perm of permutations) {
		let currentPathWeight = 0;
		let k = start;

		for (const next of perm) {
			currentPathWeight += graph[k][next];
			k = next;
		}
		currentPathWeight += graph[k][start]; // Return to start

		minPath = Math.min(minPath, currentPathWeight);
	}

	return minPath;
}
```

## Space Complexity

Space complexity measures how much memory an algorithm needs. Just like time can grow with input size, memory requirements can too.

### Simplified Space Complexities

#### O(1) - Constant Space

**Simple Definition**: The algorithm uses the same amount of memory regardless of input size. It's like reading a recipe - no matter how many cookies you're baking, you only need one copy of the recipe.

**In Plain Terms**:

- The memory usage is fixed.
- The input size doesn't affect the memory requirements.
- Examples: Using a few variables, in-place operations.

**Multiple Examples**:

```javascript
// Example 1: Finding the sum of an array - O(1) space
function sum(array) {
	let total = 0; // One variable, doesn't change with array size
	for (let i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
}

// Example 2: In-place array reversal - O(1) space
function reverseArrayInPlace(array) {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		[array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
	}
	return array; // Uses constant extra space regardless of input size
}

// Example 3: Finding the maximum value - O(1) space
function findMaximum(array) {
	if (array.length === 0) return null;
	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > max) max = array[i];
	}
	return max;
}
```

#### O(n) - Linear Space

**Simple Definition**: Memory usage grows directly with input size. It's like copying a book - the larger the book, the more paper you need for the copy.

**In Plain Terms**:

- The memory required increases at the same rate as the input size.
- Examples: Creating a copy of an array, storing elements in a new array.

**Multiple Examples**:

```javascript
// Example 1: Creating a duplicate of each element - O(n) space
function duplicate(array) {
	const result = []; // Will grow with the input size
	for (let i = 0; i < array.length; i++) {
		result.push(array[i], array[i]); // Doubles the size
	}
	return result;
}

// Example 2: Creating a copy of an array - O(n) space
function copyArray(array) {
	const newArray = [...array]; // O(n) space - creates a new array of same size
	return newArray;
}

// Example 3: String concatenation - O(n) space
function joinElements(array) {
	return array.join(''); // Creates a new string of length proportional to input
}

// Example 4: Counting frequency of elements - O(n) space (worst case)
function countElements(array) {
	const counts = {};
	for (const item of array) {
		counts[item] = (counts[item] || 0) + 1;
	}
	return counts; // Size depends on unique elements, up to O(n)
}
```

#### O(log n) - Logarithmic Space

**Simple Definition**: Memory usage grows logarithmically with input size. It's like keeping track of where you are in a divide-and-conquer algorithm.

**In Plain Terms**:

- Memory grows much slower than the input size.
- Usually due to recursive call stacks in divide-and-conquer algorithms.
- Much more efficient than linear space for large inputs.

**Multiple Examples**:

```javascript
// Example 1: Recursive binary search with call stack - O(log n) space (call stack)
function recursiveBinarySearch(array, target, left = 0, right = array.length - 1) {
	if (left > right) return -1;

	const mid = Math.floor((left + right) / 2);
	if (array[mid] === target) return mid;
	if (array[mid] > target) return recursiveBinarySearch(array, target, left, mid - 1);
	return recursiveBinarySearch(array, target, mid + 1, right);
	// Call stack depth is O(log n)
}

// Example 2: Finding depth of a balanced binary tree - O(log n) space (call stack)
function findDepth(root) {
	if (!root) return 0;
	return 1 + Math.max(findDepth(root.left), findDepth(root.right));
	// Maximum call stack depth is O(log n) for balanced tree
}

// Example 3: Merge sort (in-place, not counting recursion) - O(log n) space (call stack)
function mergeSortInPlace(array, start = 0, end = array.length - 1) {
	if (start >= end) return;

	const mid = Math.floor((start + end) / 2);
	mergeSortInPlace(array, start, mid);
	mergeSortInPlace(array, mid + 1, end);
	mergeInPlace(array, start, mid, end);
	// Recursion stack is O(log n)
}
```

## Common Algorithm Patterns and Their Complexities

### Two-Pointer Technique - Often O(n)

```javascript
// O(n) time, O(1) space
function isPalindrome(s) {
	let left = 0,
		right = s.length - 1;
	while (left < right) {
		if (s[left] !== s[right]) return false;
		left++;
		right--;
	}
	return true;
}
```

### Sliding Window - Often O(n)

```javascript
// O(n) time, O(1) space
function maxSubArraySum(array, size) {
	let maxSum = 0;
	let windowSum = 0;

	// First window sum
	for (let i = 0; i < size; i++) {
		windowSum += array[i];
	}
	maxSum = windowSum;

	// Slide window and find max
	for (let i = size; i < array.length; i++) {
		windowSum = windowSum - array[i - size] + array[i];
		maxSum = Math.max(maxSum, windowSum);
	}

	return maxSum;
}
```

## Best Practices

1. **Analyze before optimizing**: First make it work, then make it fast
2. **Consider the average case**: Don't just focus on worst-case scenarios
3. **Space-time tradeoffs**: Sometimes using more memory leads to faster algorithms
4. **Consider the problem constraints**: Large inputs require efficient algorithms

## Algorithm Comparison Table

| Algorithm     | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ------------- | ------------------------- | ----------------------- | ---------------- |
| QuickSort     | O(n log n)                | O(n²)                   | O(log n)         |
| MergeSort     | O(n log n)                | O(n log n)              | O(n)             |
| HeapSort      | O(n log n)                | O(n log n)              | O(1)             |
| BubbleSort    | O(n²)                     | O(n²)                   | O(1)             |
| Binary Search | O(log n)                  | O(log n)                | O(1)             |
| DFS/BFS       | O(V + E)                  | O(V + E)                | O(V)             |
| Dijkstra      | O((V + E) log V)          | O((V + E) log V)        | O(V)             |

V = Vertices, E = Edges in graph algorithms

```

```
