// 7 kyu
// Substring fun
// Complete the function that takes an array of words.
// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.
// For example:
// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

// Given an array of words.
// Return a string taken from the ith char of the ith word.
// Ex:
// nthChar(["Jp","zS","YKh"]), "JSh"
// nthChar(["lk","iYY","MjBn","WHuqrRO","ghKs-"]), "lYBq-"
// Iterate through array
//      at value i, concat char at index i of respective word.

function nthChar(words) {
  return words.reduce((a, c, i) => (a += c[i]), '')
}
