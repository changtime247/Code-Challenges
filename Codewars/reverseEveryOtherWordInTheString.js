// 6 kyu
// Reverse every other word in the string
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// Given a string
// Return a string, in which every other word in arg-string is reversed
// Ex:
// reverse("Reverse this string, please!"), "Reverse siht string, !esaelp"
// reverse("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts"
// Iterate through string and reverse every other string (all the odd-indexed words)

function reverse(str) {
  return str.trim()
    ? str.split` `.map((w, i) => (i % 2 ? w.split``.reverse().join`` : w))
        .join` `
    : ''
}
