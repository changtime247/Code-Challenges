// 7 kyu
// Spacify
// Modify the spacify function so that it returns the given string with spaces inserted between each character.
// spacify("hello world") // returns "h e l l o   w o r l d"

// Parameter: Given a string.
// Return string but with an additional space in between each character.
// Example:
// spacify('hello world'),'h e l l o   w o r l d'
// spacify('12345'),'1 2 3 4 5'
// Pseudocode:
// Iterate through str and add a space in between characters (but not before first char or after last char)
// Return that new value.

function spacify(str) {
  let newStr = ''
  str.split``.forEach((char, idx) =>
    idx < str.length - 1 ? (newStr += `${char} `) : (newStr += char)
  )
  return newStr
}
