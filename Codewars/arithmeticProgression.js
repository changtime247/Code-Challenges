// 7 kyu
// Arithmetic progression
// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!
// The result should be a string of numbers, separated by comma and space.
// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

// ------------------
// Given three arguments: head element, difference between each element, and number of elements in sequence.
// Every element is a number
// Return the sequence as a string delimited by ', '
// Create an array of n elements, in which the first element is a and the difference between any two adjacent elements is d.
//

function arithmeticSequenceElements(a, d, n) {
  return Array.from({ length: n }, (_, i) => a + i * d).join`, `
}
