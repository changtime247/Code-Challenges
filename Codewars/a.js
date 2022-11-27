// 7 kyu
// "Center yourself", says the monk.
// Your company MRE Tech has hired a spiritual consultant who advised on a new Balance policy: Don't take sides, don't favour, stay in the middle. This policy even applies to the software where all strings should now be centered. You are the poor soul to implement it.
// Task
// Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.
// center(strng, width, fill=' ')
// If the left and right padding cannot be of equal length make the padding on the left side one character longer.
// If strng is longer than width return strng unchanged.
// Examples
// center('a', 3)  # returns " a "
// center('abc', 10, '_')  # returns "____abc___"
// center('abcdefg', 2)  # returns "abcdefg"

// Given a string, a number (representing the minimum width of the return length), and a char (if not provided, defaults to ' ').
// Return a string meeting minimum length, in which string is centered with char on either side.
// center('a', 3, ' '), ' a '
// center('a', 3), ' a '
// center('', 3, '_'), '___'
// center('abc', 10, '_'), '____abc___'
// center('____abc___', 10, '_'), '____abc___'
// center('abcdefg', 2, ' '), 'abcdefg'
// If string length is greater than or equal to width given, return argument string.
// Otherwise, create a while loop, in which the string is padded front and back with the fill.
// Return the exact length specified via width argument.

function center(str, width, fill = ' ') {
  if (str.length >= width) return str
  let newStr = str.slice()
  while (newStr.length < width) {
    newStr = `${fill}${newStr}${fill}`
  }
  return newStr.slice(0, width)
}
