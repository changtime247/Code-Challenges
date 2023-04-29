// 7 kyu
// Make acronym
// Write function which takes a string and make an acronym of it.
// Rule of making acronym in this kata:
// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:
// Code wars -> C, w -> C W -> CW
// Note: There will be at least two words in the given string!

// Given a string of space-delimited words.
// Return a string of all the first letters of every word, capitalized.
// Ex:
// toAcronym(["Portable Network Graphics"), "PNG"
// toAcronym(["PHP: Hypertext Preprocessor"), "PHP"
// toAcronym(["hyper text markup language"), "HTML"
// Iterate through array to work with the first letter of each word.

function toAcronym(inp) {
  return inp.split` `.map((v) => v[0].toUpperCase()).join``
}
