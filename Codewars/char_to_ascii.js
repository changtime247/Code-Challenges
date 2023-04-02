// 7 kyu
// char_to_ascii
// Instructions
// Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.

// Given a string.
// If string is null, return null.
// Otherwise, return an object of key-value pairs of alphabetic chars and each's respective charCode.
// Ex:
// charToAscii(""), null
// charToAscii("a"), {"a":97}
// charToAscii("aaa"), {"a":97}
// charToAscii("hello world"), {"h":104, "e":101, "l":108, "o":111, "w":119, "r":114, "d":100}
// charToAscii("ABaa ^"), {"A":65, "B":66, "a":97}
// If string is null, return null.
// Create a new object.
// Iterate through each char of string:
//      if it is an alphabet, map it to object with char as key and charCode as value.

function charToAscii(string) {
  return string
    ? string.split``.reduce((a, c) => {
        const unicode = c.charCodeAt(0)
        if (
          !a[c] &&
          ((unicode >= 65 && unicode <= 90) ||
            (unicode >= 97 && unicode <= 122))
        ) {
          a[c] = unicode
        }
        return a
      }, {})
    : null
}
