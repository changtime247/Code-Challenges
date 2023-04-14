// 7 kyu
// Scrolling Text
// 493092% of 6701,969 of 3,418AndrasG3 Issues Reported
// Let's create some scrolling text!
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
// Example
// scrollingText("codewars") should return:
// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

// Given a string.
// Return an array of all possible rotations of the arg-string (in uppercase).
// Ex:
// scrollingText("abc"), ["ABC","BCA","CAB"]
// To get all possible rotations of arg-string,
// progressively iterate through arg-string from starting char to last char,
// concatenating each string at any given iteration with the beginning section of arg-string.

function scrollingText(text) {
  let res = []
  for (let i = 0; i < text.length; i++) {
    let newText = text.slice(i) + (i > 0 ? text.slice(0, i) : '')
    res.push(newText.toUpperCase())
  }
  return res
}
