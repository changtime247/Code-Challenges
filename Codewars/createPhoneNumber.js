// 6 kyu
// Create Phone Number
// Output
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// Given an array of numbers
// Return the array as a string formatted as such: "(123) 456-7890"
// createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111"
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"
// Slice corresponding sections of the array and join without delimiter.

function createPhoneNumber(numbers) {
  const sliceAndJoin = (arr, start, end) => {
    return arr.slice(start, end).join``
  }

  return (
    numbers.length === 10 &&
    `(${sliceAndJoin(numbers, 0, 3)}) ${sliceAndJoin(
      numbers,
      3,
      6
    )}-${sliceAndJoin(numbers, 6)}`
  )
}
