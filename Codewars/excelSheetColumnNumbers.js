// 7 kyu
// Excel sheet column numbers
// Write a function
// titleToNumber(title) or title_to_number(title) or titleToNb title ...
// (depending on the language)
// that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.
// Examples:
// titleTonumber('A') === 1
// titleTonumber('Z') === 26
// titleTonumber('AA') === 27
// Note for Clojure:
// Don't use Java Math/pow (even with bigint) because there is a loss of precision
// when the length of "title" is growing.
// Write your own function "exp [x n]".

// Given a string (letter(s) in all caps) which represents a column title (i.e. "number").
// Return the actual number that the column title corresponds to.
// Ex:
// titleToNumber('AZ'),52
// titleToNumber('BA'),53
// titleToNumber('CA'),79
// titleToNumber('CZ'),104
// titleToNumber('DA'),105
// titleToNumber('CODEWARS'),28779382963
// Create a variable initialized to 0 to serve as the count (or number of the column).
// Iterate through the title from right to left. At each iteration,
//      add to the count the value of the letter respective to that letter's position in the alphabet and column title.

function titleToNumber(title) {
  let count = 0
  for (let i = 0; i < title.length; i++) {
    let abcIdx = title.charCodeAt(title.length - 1 - i) - 64
    count += abcIdx * Math.pow(26, i)
  }
  return count
}
