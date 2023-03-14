// 6 kyu
// Simple frequency sort
// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.
// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.

// Given an array of unsorted numbers.
// Return the array sorted by descending frequency.
// If two (or more) number(s) have the same frequency, return in ascending value.
// Create a hash map.
// Sort the entries by descending frequency. If same frequency, sort by ascending value.

function solve(arr) {
  let hash = arr.reduce((a, c) => (a[c] = (a[c] || 0) + 1) && a, {})
  return []
    .concat(
      ...Object.entries(hash)
        .sort((a, b) => b[1] - a[1] || a[0] - b[0])
        .map((sub) => `${sub[0]} `.repeat(sub[1]).trim().split` `)
    )
    .map((n) => +n)
}
