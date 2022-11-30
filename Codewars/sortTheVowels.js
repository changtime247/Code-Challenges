// 7 kyu
// Sort the Vowels!
// In this kata, we want to sort the vowels in a special format.
// Task
// Write a function which takes a input string s and return a string in the following way:
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|
// Notes:
// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// for the purpose of this kata, the vowels are : a e i o u
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string

// Given a string
// Return a string with placement of vowels and non-vowels in corresponding location, as illustrated above.
// sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
// sortVowels('Rnd Te5T'), 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'
// sortVowels(1337), ''
// sortVowels(undefined), ''
// Iterate through string.
// If vowel, place '|' before the vowel.
// If a letter but not a vowel, place '|' after the letter.
// If integer, undefined, or null, do nothing.

function sortVowels(s) {
  if (!s || s == parseFloat(s)) return ''
  let newS = ''
  for (let i = 0; i < s.length; i++) {
    if ('aeiouAEIOU'.includes(s[i])) {
      newS = newS + '|' + s[i]
    } else {
      newS = newS + s[i] + '|'
    }
    if (i < s.length - 1) newS += '\n'
  }
  return newS
}
