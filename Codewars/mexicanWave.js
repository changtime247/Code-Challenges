// 6 kyu
// Mexican Wave
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.
// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

// Parameter: Given a string of lower case letters with possible spaces (preceding, inside of, or proceeding the string)
// Return an array of all possible string combinations in which the string has one letter capitalized.
// That one letter will go through all the letters from the first letter of string to the last letter of string.
// But not on spaces. In other words, since a space cannot be capitalized, just skip over the space (i.e. no one is in that seat)
// Examples:
// wave("")             -->     []
// wave("hello")        -->     ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// wave("codewars")     -->     ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
// wave("two words")    -->     ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
// wave(" gap ")        -->     [" Gap ", " gAp ", " gaP "]
// Pseudocode: Create an array with length equal to string length.
// Value at each index will be a version of the string but with the character, at the same index value of the string, capitalized.
// If value at the index of string is a whitespace, then just give the value at the same index of the array and empty string value.
// Filter out the newly created array for all empty string values (i.e. array values resulting from 'the empty seats').
// Return expression.

function wave(str) {
  let strAsWave = Array.from({ length: str.length }, (_, i) =>
    str[i] !== ' '
      ? str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)
      : ''
  ).filter((e) => e)
  return strAsWave
}
