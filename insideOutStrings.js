// 6 kyu
// Inside Out Strings
// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.
// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.
// An example should clarify:
// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

// ----------------------
// Parameter: Given a string of words, each separated from another by a space.
// Return modified string, such that the words are flipped inside out along the middle.
// Words of even length are split exactly in half and the halves are reversed.
// Words of odd length are split along the middle character, such that the middle character stays put and the each 'half' is reversed.
// Examples:
// insideOut('man i need a taxi up to ubud')               -->  'man i ende a atix up to budu'
// insideOut('what time are we climbing up the volcano')   -->  'hwta item are we milcgnib up the lovcona'
// insideOut('take me to semynak')                         -->  'atek me to mesykan'
// Pseudocode:
// Iterate through every word of the string and perform the reversal process.
// If the word has an even number of letters, then simply reverse the two halves and rejoin the two.
// If the word has an odd number of letters, then simply reverse the two halves (left of middle character and right of middle character), leaving the middle character alone, and rejoin the three (incl. the middle character).
// Return the entire expression.

function insideOut(x) {
  return x.split` `.map((w) => {
    let l = w.length
    return `${w.slice(0, ~~(l / 2)).split``.reverse().join``}${
      l % 2 ? w[~~(l / 2)] : ''
    }${w.slice(Math.ceil(l / 2)).split``.reverse().join``}`
  }).join` `
}
