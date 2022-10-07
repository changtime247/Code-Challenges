// 7 kyu
// Alternate case
// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// ----------------------
// Parameter: Given a string.
// Return a string with all the letters in the opposite case.
// Examples:
// alternateCase("abc")          -->  "ABC"
// alternateCase("ABC")          -->  "abc"
// alternateCase("Hello World")  -->  "hELLO wORLD"
// Pseudocode: Iterate through each letter of the string.
// If lowercase, then change to uppercase. And vice versa.
// Return new string expression.

function alternateCase(s) {
  let newS = ''
  for (let i = 0; i < s.length; i++) {
    newS +=
      s[i] === s[i].toUpperCase() ? s[i].toLowerCase() : s[i].toUpperCase()
  }
  return newS
}
