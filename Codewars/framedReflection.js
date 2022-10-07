// 6 kyu
// Framed Reflection
// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:
// 'Hello World'
// would give:
// Words in your solution should be left-aligned.

// ----------------------
// Parameter: Given a string of word(s).
// Return another string, representing the argument string but reflected in a mirror.
// Examples:
// mirror('Hello World')                    -->  '*********\n* olleH *\n* dlroW *\n*********'
// mirror('Codewars')                       -->  '************\n* srawedoC *\n************'
// mirror('jd spxhk vwlxlje puxzmv gtk')    -->  '***********\n* dj      *\n* khxps   *\n* ejlxlwv *\n* vmzxup  *\n* ktg     *\n***********'
// Pseudocode: 
// Reverse individual words of the argument.
// Create an array with each element containing the reversed words of the argument.
// Pad each element with corresponding need for spaces so all 'rows' are aligned.
// Add to array's beginning and ending indices, a value of '*' that is as long as all the other rows. 
// Join the array on a new line. 

function mirror(text) {
  let splitd = text.split` `
  let longest = splitd.slice().sort((a, b) => b.length - a.length)[0].length
  let frame = '*'.repeat(longest + 4)
  splitd = splitd.map(
    (w) => `* ${w.split``.reverse().join``.padEnd(longest)} *`
  )
  return [frame, ...splitd, frame].join(`\n`)
}