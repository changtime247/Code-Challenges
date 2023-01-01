// 7 kyu
// Frequency sequence
// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).
// Example (s, sep --> Output)
// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"

// Given a string and a character.
// Return a string, in which each letter of the argument string is turned into a number (representing the number of times that letter appears), and also delimited by the argument character.
// Iterate through str to grab frequency
// Map through str to create an array of number values, each value corresponding to frequency.
// Join array of values with character provided.

function freqSeq(str, sep) {
  const obj = str.split``.reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), {})
  return str.split``.map((c) => obj[c]).join(sep)
}
