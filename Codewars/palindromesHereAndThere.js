// 7 kyu
// Palindromes Here and There
// An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.
// Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.
// For example:
// [101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
// [45, 21, 303, 56]        ==>  [0, 0, 1, 0]

// Given an array of numbers.
// Return an array of 0s and 1s (1 if the value is palindromic, and 0 otherwise).
// Ex:
// convertPalindromes([22, 303, 76, 411, 89]), [1, 1, 0, 0, 0]
// convertPalindromes([653, 808, 5]), [0, 1, 1]
// convertPalindromes([4, 23, 441, 565, 19, 818]), [1, 0, 0, 1, 0, 1]
// Iterate through arg-array,
//      Check if value is a palindromic string and return 1 if so or 0 if not.

function convertPalindromes(numbers) {
  return numbers.map((v) =>
    v.toString() == v.toString().split``.reverse().join`` ? 1 : 0
  )
}
