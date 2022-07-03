// 6 kyu
// Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// ----------------------
// Parameter: Given a string in camel case.
// Return the string un-camel-cased.
// Examples:
// solution('camelCasing')      -->  'camel Casing'
// solution('camelCasingTest')  -->  'camel Casing Test'
// solution('capitalAndCapital')  -->  'capital And Capital'
// Pseudocode:
// Create empty string and assign it to variable.
// Split string into individual letters.
// Use for loop to iterate through letters.
// If letter is lower case, concat, as is, to new variable.
// If letter is upper case, concat, with space in front of it, to new variable.
// Return new variable.

function solution(string) {
  let ans = ''
  string.split``.forEach((e) =>
    e.toLowerCase() === e ? (ans += e) : (ans += ` ${e}`)
  )
  return ans
}
