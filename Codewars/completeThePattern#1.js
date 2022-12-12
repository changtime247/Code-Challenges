// 7 kyu
// Complete The Pattern #1
// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn

// Examples:
// pattern(5):
// 1
// 22
// 333
// 4444
// 55555

// pattern(11):
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111

// Hint: Use \n in string to jump to next line
// List of all my katas

// Given a number
// Return a ASCII art string in a pyramid-like shape, in which each line contains a number that number of times
// Create an array of length n (1-index based).
// Iterate through array, such that each string value of array contains that many values as a string.
// Join array using newline as a delimiter and return.

function pattern(n) {
  return Array.from({ length: n }, (_, i) => `${i + 1}`.repeat(i + 1)).join`\n`
}
