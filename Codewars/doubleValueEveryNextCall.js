// 7 kyu
// Double value every next call
// This kata is about static method that should return different values.
// On the first call it must be 1, on the second and others - it must be a double from previous value.
// Look tests for more examples, good luck :)

// Implement a static method, getNumber, for a class named "Class" which returns a number.
// First call's return value is 1.
// Subsequent call's return value is double the previous value.
// Within static method, save the return value as a property.

class Class {
  static getNumber() {
    if (!Class.val) Class.val = 1
    else Class.val *= 2
    return Class.val
  }
}
