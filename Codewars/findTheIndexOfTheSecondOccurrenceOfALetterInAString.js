// 7 kyu
// Find the index of the second occurrence of a letter in a string
// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.
// Examples:
// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1
// Good luck ;) And don't forget to rate this Kata if you liked it.

// Given a string and another string of a single letter.
// Return the index of the second occurrence of the single letter string in the first arg-string. If none, return -1.
// Ex:
// secondSymbol('Hello world!!!', 'o'), 7
// secondSymbol('', 'q'), -1
// secondSymbol('Hello', '!'), -1
// Iterate through first arg-string:
//      Count the number of occurrences of the second arg-string
//      At second occurrence, break iteration and return the index at which it occurred.

function secondSymbol(s, symbol) {
  return s.indexOf(symbol, s.indexOf(symbol) + 1)
}
