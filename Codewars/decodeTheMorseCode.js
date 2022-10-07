// 6 kyu
// Decode the Morse code

// Part of Series 1/3
// This kata is part of a series on the Morse code. After you solve this kata, you may move to the next one.

// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"
// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

// The Morse code table is preloaded for you as a dictionary, feel free to use it:

/*
[ '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': '\'',
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS' ]
*/

// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

// Good luck!

// After you complete this kata, you may try yourself at Decode the Morse code, advanced.

// ----------------------
// Parameter: Given a string of dashes and dots, reprsenting morse code.
// Return the decoded message from the morse code. Morse code table has been provided.
// Examples:
// decodeMorse('... --- ...')                  --> 'SOS'
// decodeMorse('...   ---   ...')              --> 'S O S'
// decodeMorse(' . ')                          --> 'E'
// decodeMorse('   .   . ')                    --> 'E E'
// decodeMorse('.... . -.--   .--- ..- -.. .') --> 'HEY JUDE'
// decodeMorse('...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ')
//                                             -->`SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`
// Pseudocode:
// Important thing to note in morse code is that three spaces is different from a single space.
// Three spaces ('   ') in morse is equivalent to one space (' ') in regular dialect
// A single space (' ') in morse is equivalent to no space ('') in regular dialect
// Morse code table has already been provided as an object of keys (morse) and values (letters, digits, punctuation, or service codes)
// First, split the string on three spaces to separate each morse code word from another.
// Map the array of morse words, in which splitting once more but, this time, we are splitting each individual word into individual letters
// Map once more, this time to get each individual morse code "key" and return the MORSE_CODE (object) value at such and such key.
// Join the inner array on no space (since we are dealing with individual words).
// Then, join the returned expression (which evaluated to an array) on one space, since we are dealing with joining words of a sentence/ message.
// Trim the final expression to cut off any white space in the beginning or end of the string.
// Return entire expression.

decodeMorse = function(morseCode){
    return (morseCode.split`   `.map(e=>e.split` `.map(iE=>MORSE_CODE[iE]).join``).join` `).trim();
}