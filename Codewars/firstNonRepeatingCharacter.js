// 5 kyu
// First non-repeating character
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// Given a string
// Return the first character (ie letter) that is not repeated. IOW, there is only one of that letter in the string.
// Ex:
// firstNonRepeatingLetter('a'), 'a'
// firstNonRepeatingLetter('stress'), 't'
// firstNonRepeatingLetter('moonmen'), 'e'
// Pseudocode:
// Create a container to hold all letters that are not unique.
// Iterate through the string from left to right.
// At each iteration check if the current char (lowercase version) can be found anywhere else in the string (from right to left)
// If it is found, then add the lowercased char to the container. Keep iterating.
// Return the first char (lowercased) that is the same index from right to left AND not found in container
// If iteration is finished and nothing has yet been returned, return an empty string indicating that all chars are repeated at least once.

function firstNonRepeatingLetter(s) {
  let container = []
  for (let i = 0; i < s.length; i++) {
    if (
      s.toLowerCase().lastIndexOf(s[i].toLowerCase()) === i &&
      !container.includes(s[i])
    ) {
      return s[i]
    } else {
      container.push(s[i].toLowerCase())
    }
  }
  return ''
}
