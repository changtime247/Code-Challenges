// 6 kyu
// first character that repeats
// Find the first character that repeats in a String and return that character.
// firstDup('tweet') => 't'
// firstDup('like') => undefined
// This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.
// Another example:
// In 'translator' you should return 't', not 'a'.
// v      v
// translator
//   ^   ^
// While second 'a' appears before second 't', the first 't' is before the first 'a'.

// Given a string.
// Return the first char that repeats itself.
// firstDup('tweet'), 't'
// firstDup('Ode to Joy'), ' '
// firstDup('ode to joy'), 'o'
// firstDup('bar'), undefined
// firstDup('123123'), '1'
// firstDup('!@#$!@#$'), '!'
// Given a string.
// Find all unique chars of string.
// Create variable, count, set to 0.
// While count is less than 2, iterate through string looking for first char to repeat itself.
// If none, repeat return undefined.

function firstDup(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.split``.indexOf(s[i]) !== s.split``.lastIndexOf(s[i])) {
      return s[i]
    }
  }
  return
}
