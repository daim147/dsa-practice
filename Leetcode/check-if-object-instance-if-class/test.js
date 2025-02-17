const checkIfInstanceOf = require('./index');

class Animal {}
class Dog extends Animal {}
function Container(value) {
	this.value = value;
}
function Box(value) {
	this.value = value;
}

describe('checkIfInstanceOf', () => {
	it('should return false for non-instances', () => {
		const b = new Box(1);
		expect(checkIfInstanceOf(b, Container)).toBe(false);
		expect(checkIfInstanceOf(Date, Date)).toBe(false);
		expect(checkIfInstanceOf(Object, Object)).toBe(true);
	});

	it('should return true for instances', () => {
		expect(checkIfInstanceOf(new Dog(), Animal)).toBe(true);
		expect(checkIfInstanceOf(5, Number)).toBe(true);
		expect(checkIfInstanceOf('hello', String)).toBe(true);
		expect(checkIfInstanceOf(true, Boolean)).toBe(true);
	});
});
