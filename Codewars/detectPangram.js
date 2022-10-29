// 6 kyu
// Detect Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Given a string
// Return a boolean indicating whether string is a pangram (case, punctuation, numbers are irrelevant)
// Ex:
// isPangram("The quick brown fox jumps over the lazy dog."), true
// isPangram("This is not a pangram."), false
// Pseudocode:
// Use new Set on string to grab all unique chars
// Using charCode, filter out all chars that are not alphabet chars.
// If 26 letters, return true. Else, return false.

function isPangram(string) {
  let abcs = 'abcdefghijklmnopqrstuvwxyz'
  let allChars = [...new Set(string.toLowerCase().split``)]
  let filteredChars = allChars.filter((c) => abcs.includes(c))
  return abcs.length === filteredChars.length
}
