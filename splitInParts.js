// 7 kyu
// Split In Parts
// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
// Example:
// Split the below string into other strings of size #3
// 'supercalifragilisticexpialidocious'
// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:
// String length is always greater than 0
// String has no spaces
// Size is always positive

// ----------------------
// Parameters: Given a string and a number.
// Return that string modified such that the word is split into parts - each part has a length of the number argument.
// Examples:
// splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s"
// splitInParts("HelloKata", 1), "H e l l o K a t a"
// splitInParts("HelloKata", 9), "HelloKata"
// Pseudocode: Create a new variable set to an empty string.
// Iterate through argument string and add a space every x iterations, where x is the number argument.
// Trim whitespace and return the new string.

const splitInParts = (s, partLength) => {
  let newS = ''
  let arr = s.split``
  for (let i = 0; i < arr.length; i++) {
    newS += arr[i]
    if ((i + 1) % partLength === 0) newS += ' '
  }
  return newS.trim()
}
