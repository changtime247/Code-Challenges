// 6 kyu
// Numbers of Letters of Numbers
// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.
// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).
// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:
// Examples
// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]

// ----------------------
// Parameters: Given a positive integer.
// Return an array, in which:
// index 0 holds the integer as a word (see note). integerAsWord (e.g. 'one' instead of 1; 'two', 2; 'three', 3),
// and every subsequent index holds the integerAsWord value of the previous index's string length. 
// Note: numbers greater than 10 will be treated as multiple integers where each digit is an integer (e.g. 10 is NOT 'ten' but rather 'onezero').
// Examples:
// numbersOfLetters(1)      -->     ["one", "three", "five", "four"]);
// numbersOfLetters(12)     -->     ["onetwo", "six", "three", "five", "four"]);
// numbersOfLetters(37)     -->     ["threeseven", "onezero", "seven", "five", "four"]);
// numbersOfLetters(311)    -->     ["threeoneone", "oneone", "six", "three", "five", "four"]);
// numbersOfLetters(999)    -->     ?
// Step 1: argument is 999. integerAsWord is "nineninenine"
// Step 2: previous' length is 12. integerAsWord is "onetwo"
// Step 3: previous' length is 6. integerAsWord is "six"
// Step 4: previous' length is 3. integerAsWord is "three"
// Step 5: previous' length is 5. integerAsWord is "five"
// Step 6: previous' length is 4. integerAsWord is "four"
// So return value is an array of all integerAsWord values.
// numbersOfLetters(999)    -->     ["nineninenine", "onetwo", "six", "three", "five", "four"]
// Pseudocode:
// Create a helper function which will give us the integerAsWord, the integer as a word (e.g. 999 into "nineninenine")
// In main function, create empty array.
// Create a loop that runs as long as the integer does not equal to the length of that integer as a word. 
// Return the array.

function numbersOfLetters(integer) {
  let arr = []
  while (integer !== intToWord(integer).length) {
    const string = intToWord(integer)
    arr.push(string)
    integer = string.length
  }
  return [...arr, 'four']
}

function intToWord(int) {
  let obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }
  return int.toString().split``.map((n) => obj[n]).join``
}
