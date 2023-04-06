// 7 kyu
// Print Fixed Size Two Dimensional Table
// Create function that outputs 2 dimensional table and places a character in it. Table size is 4 x 4. Function takes row, column and a character.
// Assume that row and column values are between 0 inclusive and 4 exclusive.
// Assume that character has length of 1.
// Example:
// row = 2
// column = 3
// character = "B"
// ---------
// | | | | |
// ---------
// | | | | |
// ---------
// | | | |B|
// ---------
// | | | | |
// ---------

// Given an integer representing row, an integer representing column, and a single char. (row, column both 0-index based)
// Return a fixed grid of 4x4, in which every "cell" is an single empty space, except for the cell provided by the arg-row&column. Replace that with the arg-char.
// See above example.
// Create array of subarrays.
// Each value is an empty space except for the one outlined by arg-row/ arg-column. Replace that one with the arg-char.
// Join each val of subarrays, and pad the start and end, with a "|".
// Join each subarray with the divider ("---------")

function buildTableText(row, column, character) {
  let row_divider = '---------\n'
  let arr = Array.from({ length: 4 }, (_) => ` `)
  let grid = Array.from({ length: 4 }, (_, oi) => {
    if (oi == row)
      return `|${arr
        .map((n, ii) => (ii == column ? character : ` `))
        .join('|')}|\n`
    else return `|${arr.join('|')}|\n`
  })
  return `${row_divider}${grid.join(row_divider)}${row_divider}`
}
