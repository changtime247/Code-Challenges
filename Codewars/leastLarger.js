// 7 kyu
// Least Larger
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).
// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.
// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

// Given an array and an integer, representing index.
// Return the smallest number of array that is larger than the number at argument-index.
// If no such number, return -1.
// Filter array to grab only values larger than number at argument-index.
// Return index of min value of array (or -1, if none).

function leastLarger(a, i) {
  let filtered = a.filter((n) => n > a[i]).sort((a, b) => a - b)
  if (filtered.length < 1) return -1
  return a.indexOf(filtered[0])
}
