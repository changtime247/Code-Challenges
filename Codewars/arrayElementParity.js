// 7 kyu
// Array element parity
// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
// Examples:
// [1, -1, 2, -2, 3] => 3
// 3 has no matching negative appearance
// [-3, 1, 2, 3, -1, -4, -2] => -4
// -4 has no matching positive appearance
// [1, -1, 2, -2, 3, 3] => 3
// (the only-positive or only-negative integer may appear more than once)

// Given an array of integers, in which for every positive value there is the same value but negative.
// Except there is one value which does not have an 'opposite' value.
// And that one value may appear more than once in the array.
// Return that possibly repeating value that has no 'opposite' in the array.
// Grab only the unique values of the array since there may be repeating values.
// Create another variable to store the sum of the unique values.
// Iterate through array, adding each value to the newly created variable.
// Return the sum, which contains only that value which has no 'opposite'.

function solve(arr) {
  return [...new Set(arr)].reduce((a, c) => (a += c), 0)
}
