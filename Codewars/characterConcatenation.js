// 7 kyu
// Character Concatenation
// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.
// If the string's length is odd drop the central element.
// For example:
// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result

// Given a string.
// Return a new string in which the characters are formed by joining the first pair of outermost letters of arg-string and the number 1,
// and progressively working inward and incrementing the number by 1 each time.
// Ex:
// charConcat("abc def"),'af1be2cd3'
// charConcat("CodeWars"),'Cs1or2da3eW4'
// Create a for loop to join pair of outer chars and working inward and index + 1 to get the number.
// For loop should go on for half the length of the string, rounded down.

function charConcat(string) {
  let newStr = ''
  for (let i = 0; i < ~~(string.length / 2); i++) {
    newStr = newStr + `${string[i]}${string[string.length - 1 - i]}${i + 1}`
  }
  return newStr
}
