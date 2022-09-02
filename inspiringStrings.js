// 7 kyu
// Inspiring Strings
// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.
// Example:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold

// ----------------------
// Parameter: Given string of words, space delimited.
// Return the longest word of the string. If there are several longest words, return the last word of words (index wise).
// Examples:
// longestWord('a b c d e fgh'), "fgh"
// longestWord('one two three'), "three"
// longestWord('red blue grey'), "grey"
// Pseudocode: Create an empty string
// Iterate through each word of the string, assigning to newly created empty string, the word at that iteration,
// if either it is the first word or it is a longer word or a word of equal length.
// Return that string.

function longestWord(stringOfWords) {
  let longest = ''
  stringOfWords.split` `.forEach((w) =>
    w.length >= longest.length ? (longest = w) : ''
  )
  return longest
}
