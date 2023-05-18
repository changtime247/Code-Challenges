// 6 kyu
// Number Format
// Format any integer provided into a string with "," (commas) in the correct places.
// Example:
// For n = 100000 the function should return '100,000';
// For n = 5678545 the function should return '5,678,545';
// for n = -420902 the function should return '-420,902'.

// Given an integer.
// Return a string version of the integer with commas.
// See above for examples.
// Create a variable initialized to an empty string.
// Iterate through the integer digits
//      add to the string
//      after every 3rd digit, except the highest digit, add a comma to the string

const numberFormat = (n) => {
  let newStr = ''
  Math.abs(n).toString().split``.reverse().forEach((char, i, r) => {
    newStr = char + newStr
    if (i != r.length - 1 && (i + 1) % 3 == 0) newStr = ',' + newStr
  })
  return n > 0 ? newStr : `-${newStr}`
}
