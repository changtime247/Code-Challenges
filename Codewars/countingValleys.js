// 7 kyu
// Counting Valleys
// You need count how many valleys you will pass.
// Start is always from zero level.
// Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.
// One passed valley is equal one entry and one exit of a valley.
// s='FUFFDDFDUDFUFUF'
// U=UP
// F=FORWARD
// D=DOWN
// To represent string above
// (level 1)  __
// (level 0)_/  \         _(exit we are again on level 0)
// (entry-1)     \_     _/
// (level-2)       \/\_/
// So here we passed one valley

// ----------------------
// Parameter: Given a string with letters representing movements (U=UP, F=FORWARD, D=DOWN)
// Return the number of times that the string path passes the valley.
// Examples:
// countingValleys('FUFFDDFDUDFUFUF'), 1
// Pseudocode:
// At the start of string path, the level is at 0.
// Iterate through the string, incrementing the level by one on 'U' and decrementing by one on 'D'.
// Return the number of times that the path passes through a valley
// ('passing through a valley' means anytime the path level goes from 0 to -n (any negative number) and back up to 0)

function countingValleys(s) {
  let lvl = 0
  return s.split``.reduce((a, c) => {
    if (c === 'U') {
      if (lvl === -1) {
        a++
      }
      lvl++
    }
    if (c === 'D') {
      lvl--
    }
    return a
  }, 0)
}
