// 6 kyu
// Min Factor Distance
// Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.
// Example:
// 13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]
// Hence the asnwer will be 2 (=13-11)

// ----------------------
// Parameter: Given a positive integer.
// Return the smallest distance between two factors (of the argument).
// Examples:
// minDistance(8)       -->  1
// minDistance(25)      -->  4
// minDistance(13013)   -->  2
// minDistance(218683)  -->  198
// Pseudocode:
// Loop through all integers from 1 to n, pushing them into an empty array, if the integer evenly divides into the argument.
// (If not divisible, then not part of that array)
// Map the array to contain differences (value at index i+1 minus value at index i).
// Use Math.min to return smallest number.

function minDistance(n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? arr.push(i) : arr
  }
  const distances = arr.map((e, i, r) => (r[i + 1] || 0) - e).slice(0, -1)
  return Math.min(...distances)
}
