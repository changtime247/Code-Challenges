// 5 kyu
// Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// ----------------------
// Parameter: Given a string of words separated by a space.
// Return pig lating version of string.
// Examples:
// pigIt('Pig latin is cool') --> 'igPay atinlay siay oolcay'
// pigIt('This is my string') --> 'hisTay siay ymay tringsay'
// Pseudocode:
// Iterate through string and modify each word.
// For each element, if it begins with a letter, then it is a word.
// Move first letter to the end and concatenate with 'ay'.
// If element does not begin with a letter, then it is not a word (e.g. punctuation) and there is no need to modify it at all.
// Return string of modified words and unmodified punctuation.

function pigIt(str) {
  return str.split` `.map((w) =>
    (w.charCodeAt(0) > 64 && w.charCodeAt(0) < 91) ||
    (w.charCodeAt(0) > 96 && w.charCodeAt(0) < 123)
      ? w.slice(1) + w[0] + 'ay'
      : w
  ).join` `
}
