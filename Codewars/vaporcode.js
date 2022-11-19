// 7 kyu
// V A P O R C O D E
// ASC Week 1 Challenge 4 (Medium #1)
// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
// Note that spaces should be ignored in this case.
// Examples
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

// Given a string.
// Return a string with all the characters from the argument (except spaces) in uppercase, delimited by two spaces.
// Create a variable to hold new string value that needs to be returned.
// Iterate through string, add every character (except spaces) in uppercase to the new string.
// Return new string.

function vaporcode(string) {
  let newStr = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newStr += `${string[i].toUpperCase()}  `
    }
  }
  return newStr.trim()
}
