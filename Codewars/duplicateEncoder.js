// 6 kyu
// Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Given a string.
// Return another string, in which every unique char in argument string is replaced with "(" and non-uniques replaced with ")".
// Create a variable to hold result string
// Iterate through string and check if indexOf and lastIndexOf that char is equal.
//      If so, it is unique. Concat onto newly created string, the corresponding value.
//      If not, it is not unique. Concat onto newly created string, the corresponding value.

function duplicateEncode(word) {
  let lc = word.toLowerCase()
  let newWord = ''
  for (let i = 0; i < lc.length; i++) {
    lc.indexOf(lc[i]) === lc.lastIndexOf(lc[i])
      ? (newWord += '(')
      : (newWord += ')')
  }
  return newWord
}
