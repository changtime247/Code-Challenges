// 6 kyu
// Replace With Alphabet Position
// 260040590% of 15,19856,070 of 141,121MysteriousMagenta2 Issues Reported
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// Given a string
// Return a string of space delimited numbers, representing the position of the alphabet (using index 1 as 'a')
// alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
// Pseudocode:
// Iterate through the string and change each letter to a number, representing index value of the letter's alphabet position
// Filter out any char that is not a letter
// Return the numbers as a string, space-delimited

function alphabetPosition(text) {
  let abc = 'abcdefghijklmnopqrstuvwxyz'.split``
  return text.toLowerCase().split``
    .filter((l) => abc.includes(l))
    .map((l) => abc.findIndex((char) => char === l) + 1).join` `
}
