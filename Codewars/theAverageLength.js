// 7 kyu
// The average length
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.
// A few examples:
// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

// Given an array of strings of varying  lengths, where each string only consists of one letter type.
// Return an array of strings, where each string is of the same letter type but of length equal to the average of lengths of strings of the array.
// See above for examples.
// Iterate through array to get average.
// Iterate through array again to create a new array of same letters but new lengths.

function averageLength(arr) {
  const avg = Math.round(arr.reduce((a, c) => (a += c.length), 0) / arr.length)
  return arr.map((str) => str[0].repeat(avg))
}
