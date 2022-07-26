// 5 kyu
// Rot13
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// ----------------------
// Parameter: Given a string.
// Rot13 will only change Latin uppercase and lowercase letters (meaning, Rot13 does not affect numbers and/or special characters).
// Return the string in the Rot13 cipher.
// Examples:
// rot13("test")              -->  "grfg"
// rot13("Test")              -->  "Grfg"
// rot13("gZQ%")              -->  "tMD%"
// rot13("7?O+z-A*=aMl")      -->  "7?B+m-N*=nZy"
// rot13("-<c&}MbW4:t9VxGX")  -->  "-<p&}ZoJ4:g9IkTK"
// Pseudocode:
// Split string into individual chars.
// Map array. Within map method, check charCode of the char.
// If it does NOT fall within the range (65 through 90, or 97 through 122), then that char will stay the same.
// If it falls within the range, then that char will be shifted 13 letters ahead (in the alphabet).
// If the new character to be falls outside of the alphabet range, just loop back to the beginning of the alphabet.
// (note: uppercase letters will remain uppercase and lowercase, lowercase)
// Still within map, return the string from whatever charCode (modified or unmodified).
// Join the return value from map method and return.

function rot13(message) {
  let rotted = message.split``.map((e) => {
    let preRot = e.charCodeAt(0),
      postRot
    if (preRot >= 65 && preRot <= 90) {
      postRot = preRot + 13
      postRot > 90 ? (postRot -= 26) : postRot
    } else if (preRot >= 97 && preRot <= 122) {
      postRot = preRot + 13
      postRot > 122 ? (postRot -= 26) : postRot
    } else {
      postRot = preRot
    }
    return String.fromCharCode(postRot)
  })
  return rotted.join``
}
