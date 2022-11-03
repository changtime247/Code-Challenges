// 7 kyu
// Vowel one
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
// All non-vowels including non alpha characters (spaces,commas etc.) should be included.
// Examples:
// vowelOne( "abceios" ) // "1001110"
// vowelOne( "aeiou, abc" ) // "1111100100"

// Given a string.
// Return a string consisting of only 0s and 1s,
// where 0 represents a non-vowel character and 1 represents a vowel character.
// vowelOne( "vowelOne" ), "01010101"
// vowelOne( "123, arou" ), "000001011"
// Create a variable set to an empty string.
// Iterate through the argument string.
// At each iteration, check if the char is aeiou.
// If yes, concat a 1 to the newly created string.
// Otherwise, concat a 0 to the newly created string.
// Return created string

function vowelOne(s) {
  let newS = ''
  for (let i = 0; i < s.length; i++) {
    if ('aeiou'.includes(s[i].toLowerCase())) {
      newS += '1'
    } else newS += '0'
  }
  return newS
}
