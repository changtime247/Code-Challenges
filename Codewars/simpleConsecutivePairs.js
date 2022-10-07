// 7 kyu
// Simple consecutive pairs
// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3.
// --the last digit has no pair, so we ignore.

// ----------------------
// Parameter: Given an array.
// Return count of how many consecutive pairs there are in array.
// Pairs are formed taking element at index i and index i+1 (next pair, index i+2 and i+3, and so on...)
// Examples:
// pairs([1,2,5,8,-4,-3,7,6,5]), 3
// pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]), 2
// pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]), 0
// pairs([-55, -56, -7, -6, 56, 55, 63, 62]), 4
// pairs([73, 72, 8, 9, 73, 72]), 3
// Pseudocode:
// Create a count variable set to 0.
// Loop through array, taking in two elements at a time.
// If the elements are consecutive, increment count variable by 1.
// After loop finishes, return count variable.

function pairs(ar) {
  let countConsecutivePairs = 0
  for (let i = 0; i < ar.length; i += 2) {
    const difference = ar[i] - ar[i + 1]
    Math.abs(difference) === 1 && countConsecutivePairs++
  }
  return countConsecutivePairs
}
