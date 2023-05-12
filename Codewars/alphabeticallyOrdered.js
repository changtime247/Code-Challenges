// 7 kyu
// Alphabetically ordered
// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.
// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)

// Given a string consisting only of lowercase letters.
// Return a boolean indicating whether the string is alphabetically ordered.
// Ex:
// "asd", false
// "codewars", false
// "door", true
// "cell", true
// "z", true
// "", true
// Iterate through each char of string. If any char is preceded by a letter not in ABC order, return false.
// Otherwise, return true.

function alphabetic(s) {
  return s
    .split('')
    .reduce(
      (a, _, i) =>
        s.charCodeAt(i) >= (s.charCodeAt(i - 1) || 0) ? a : (a = false),
      true
    )
}
