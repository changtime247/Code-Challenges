// 6 kyu
// Assemble string
// In this task, you need to restore a string from a list of its copies.
// You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").
// You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.
// If the array is empty, then return an empty string.
// Examples:
// input = [
//   "a*cde",
//   "*bcde",
//   "abc*e"
// ]
// result = "abcde"
// input = [
//   "a*c**",
//   "**cd*",
//   "a*cd*"
// ]
// result = "a#cd#"

// Given an array of strings, in which each represents the same word but each may contain corrupted chars (represented as '*')
// Return the word without corruption (if a char is impossible to "uncorrupt", then use "#" for that char)
// Create a variable to hold the "uncorrupted" word.
// Iterate through letter i of every string.
//      At each iteration, concat to newly created variable:
//      the letter
//      or "#" if all chars are "*"

function assembleString(array) {
  let newStr = ''
  if (array.length === 0) return newStr
  for (let i = 0; i < array[0].length; i++) {
    let temp = array.map((s) => s[i]).filter((s) => s !== '*')
    newStr += temp[0] || '#'
  }
  return newStr
}
