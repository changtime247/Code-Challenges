// 7 kyu
// Transpose two strings in an array
// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
// e.g. transposeTwoStrings(['Hello','World']);
// should return
// H W
// e o
// l r
// l l
// o d
// A few things to note:
// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be

// Given an array of two strings.
// Return a string formatted in the way described above.
// Create a variable set to an empty string.
// Iterate through the longer of the two strings. At each iteration:
//      Concatenate onto newly created variable, the letter at index i from str1 and the letter at index i from str2 (seperated by a space)
//      (at end of each iteration, add a new line to newly created variable)

function transposeTwoStrings(arr) {
  let str = ''
  for (let i = 0; i < Math.max(arr[0].length, arr[1].length); i++) {
    str = str + (arr[0][i] || ' ') + ' ' + (arr[1][i] || ' ')
    if (i !== Math.max(arr[0].length, arr[1].length) - 1) str += '\n'
  }
  return str
}
