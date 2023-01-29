// 7 kyu
// Evens times last
// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
// Indices in sequence start from 0.
// If the sequence is empty, you should return 0.

// Given an array of numbers
// Return the product of the sum of all even-indexed values and the value at last-index
// Ex:
// evenLast([2, 3, 4, 5]), 30
// Get the sum of all the even-indexed values
// Return the product of the sum and last-index value

function evenLast(numbers) {
  return numbers.reduce((a, c, i) => (i % 2 === 0 ? (a += c) : a, a), 0) * numbers.slice(-1)
}
