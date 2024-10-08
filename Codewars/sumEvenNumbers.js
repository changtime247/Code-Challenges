// 7 kyu
// Sum even numbers
// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.
// Only numbers without decimals like 4 or 4.0 can be even.
// The input is a sequence of numbers: integers and/or floats.
// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0

// Given an array of numbers (can be integers and/or floats).
// Return the sum of all the even numbers.
// Create a new variable set to 0.
// Iterate through array:
//      if current val is an integer (ex: 4 or 4.0) and even add to new variable.

function sumEvenNumbers(input) {
  return input.reduce((a, c) => (c == ~~c && c % 2 == 0 ? (a += c) : a), 0)
}
