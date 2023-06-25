// 7 kyu
// All Star Code Challenge #14 - Find the median
// Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.
// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.
// Write a function that takes an array of integers as an argument and returns the median of those integers.
// Notes:
// The sorting step is vital.
// Input arrays are non-empty.
// Examples
// Median of [33,99,100,30,29,50] is 41.5.
// Median of [3,2,1] is 2.

// Given an array of numbers (note: array is never empty).
// Return the median.
// Ex:
// median([1]),1
// median([3,50]),26.5
// median([591,67]), 329
// median([3,2,1]),2
// median([33,99,100,30,29,50]), 41.5
// median([437,988,868,462,401,965,809,803,285]), 803
// Sort array.
// If array's length is odd, return middle number.
// Otherwise, return avergae of middle two numbers.

function median(array) {
  const sorted = array.slice().sort((a, b) => a - b)
  return sorted.length % 2
    ? sorted[(sorted.length - 1) / 2]
    : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
}
