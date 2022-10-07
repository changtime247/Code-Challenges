// 7 kyu
// Move 10
// Move every letter in the provided string forward 10 letters through the alphabet.
// If it goes past 'z', start again at 'a'.
// Input will be a string with length > 0.

// ----------------------
// Parameter: Given a string.
// Return string where every letter in argument has been shifted 10 letters through the alphabet.
// Examples:
// moveTen('testcase')          -->     'docdmkco'
// moveTen('codewars')          -->     'mynogkbc'
// moveTen('exampletesthere')   -->     'ohkwzvodocdrobo'
// Pseudocode: Iterate through each letter of the string.
// Shift the letter 10 forward, using character code.
// In order to loop back to the beginning of the alphabet, subtract 26 (when converting from character-code to character).
// Return expression.

function moveTen(s) {
  return s.split``.map((w) => {
    let q = w.charCodeAt(0)
    return (q > 64 && q < 81) || (q > 96 && q < 113)
      ? String.fromCharCode(q + 10)
      : (q > 81 && q < 91) || (q > 112 && q < 123)
      ? String.fromCharCode(q - 16)
      : ''
  }).join``
}
