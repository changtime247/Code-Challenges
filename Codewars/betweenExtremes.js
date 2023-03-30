// 7 kyu
// Between Extremes
// Given an array of numbers, return the difference between the largest and smallest values.
// For example:
// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).
// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

// Given an array of numbers.
// Return the difference between largest and smallest values.
// Ex:
// betweenExtremes([21, 34, 54, 43, 26, 12]), 42
// betweenExtremes([-1, -41, -77, -100]), 99
// Iterate through the array to find the largest and smallest values.
// Return difference.

function betweenExtremes(numbers) {
  let smallest = numbers[0]
  let largest = numbers[0]
  for (const num of numbers) {
    if (num < smallest) smallest = num
    if (num > largest) largest = num
  }
  return largest - smallest
}
