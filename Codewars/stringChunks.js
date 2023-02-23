// 7 kyu
// String chunks
// You should write a function that takes a string and a positive integer n, splits the string into parts of length n and returns them in an array. It is ok for the last element to have less than n characters.
// If n is not a number or not a valid size (> 0) (or is absent), you should return an empty array.
// If n is greater than the length of the string, you should return an array with the only element being the same string.
// Examples:
// stringChunk('codewars', 2) // ['co', 'de', 'wa', 'rs']
// stringChunk('thiskataeasy', 4) // ['this', 'kata', 'easy']
// stringChunk('hello world', 3) // ['hel', 'lo ', 'wor', 'ld']
// stringChunk('sunny day', 0) // []

// Given a string, str, and an integer, n.
// Return an array of the string chunked into sizes of integer length.
// Create an empty array.
// If n is not a valid input choice, return the empty array.
// Iterate through str in n-length chunks.
//      At each iteration, push the chunk into the newly created array.
// After iterating, return array.

function stringChunk(str, n) {
  let arr = []
  let i = 0
  if (n > 0) {
    while (i < str.length) {
      arr.push(str.slice(i, i + n))
      i += n
    }
  }
  return arr
}