// 7 kyu
// Length and two values.
// Given an integer n and two other values, build an array of size n filled with these two values alternating.
// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
// Good luck!

// Given an integer, n, and two other values, a and b.
// Return an array of length n, in which the values are a or b in an alternating fashion (start with a, i.e. value at idx 0 is a)
// Create an array of length n.
// Iterate through the array,
//    assigning a as the value for all even-indices of the array.
//    and assigning b as the value for all odd-indices of the array.

function alternate(n, firstValue, secondValue) {
  return Array.from({ length: n }, (_, i) => (i % 2 ? secondValue : firstValue))
}
