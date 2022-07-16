// 5 kyu
// String incrementer
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

// ----------------------
// Parameter: Given a string, possibly ending with a number.
// Return the string with that number incremented by 1, if it ends in a number.
// Return the string with 1 concatenated at the end, if it does not end in a number.
// Examples:
// incrementString('foobar000')  -->  'foobar001'
// incrementString('foo')        -->  'foo1'
// incrementString('foobar001')  -->  'foobar002'
// incrementString('foobar99')   -->  'foobar100'
// incrementString('foobar099')  -->  'foobar100'
// incrementString('')           -->  '1'
// Pseudocode:
// If string does not end in a number, return string + '1'.
// (If nothing is returned, this means that the string ends in a number and we can proceed with the 'meat' of the code)
// First, find the index at which the ending number is separated from the rest of the string, or the 'turning point'.
// Iterate through string from right to left in order to look for the turning point.
// Second, string can now be separated into two: (1) the non-number portion and (2) the number portion to be incremented.
// Third, increment (2).
// ( For correct formatting for (2) after incrementing, if un-incremented number length does not equal should equal the incremented number length,
// pad the stringified new number with '0's until lengths are equal)
// Lastly, return new string combined by (1) and (2).

function incrementString(str) {
  if (isNaN(str.slice(-1))) return str + 1
  let turningPt,
    i = str.length - 1
  while (!turningPt) {
    !isNaN(str[i]) ? i-- : (turningPt = i)
  }
  let numberToIncrement = str.slice(turningPt + 1),
    numberToIncrementLength = numberToIncrement.length,
    newNumber = (+numberToIncrement + 1)
      .toString()
      .padStart(numberToIncrementLength, '0')
  return `${str.slice(0, turningPt + 1)}${newNumber}`
}
