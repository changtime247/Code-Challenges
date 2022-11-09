// 7 kyu
// All unique
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.
// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// Given a string
// Return whether the string is composed of unique chars (i.e. no char repeats)
// hasUniqueChars("  nAa"),false    // because there are two spaces ' '
// hasUniqueChars("abcdef"),true
// hasUniqueChars("aA"),true        // case - sensitivity
// hasUniqueChars("++-"),false      // because there are two '+'
// Use Set to grab only unique values.
// Check whether length of set is equal to length of string.

function hasUniqueChars(str) {
  return [...new Set(str.split``)].length === str.length
}
