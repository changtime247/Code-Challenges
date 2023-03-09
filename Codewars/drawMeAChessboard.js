// 7 kyu
// draw me a chessboard
// A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).
// Making a digital chessboard I think is an interesting way of visualising how loops can work together.
// Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.
// So chessBoard(6,4) should return an array like this:
// [
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"]
// ]
// And chessBoard(3,7) should return this:
// [
//     ["O","X","O","X","O","X","O"],
//     ["X","O","X","O","X","O","X"],
//     ["O","X","O","X","O","X","O"]
// ]
// The white spaces should be represented by an: 'O'
// and the black an: 'X'
// The first row should always start with a white space 'O'

// Given two integers, rows and columns, representing a board of that many rows and columns.
// The first row always starts with 'O'.
// The board will have alternating 'O's and 'X's.
// Return the board as an array of subarrays, each subarray being a row of the board.
// See above for examples.
// Create an array of subarrays.
// Each subarray will contain alternating values of 'O's and 'X's.
// If it is an even row (index 0 based), then it starts with 'O'; Otherwise, starts with 'X'.
// Return the array.

function chessBoard(rows, columns) {
  return Array.from({ length: rows }, (_, i) => {
    let firstChar
    let nextChar
    if (i % 2) {
      firstChar = 'X'
      nextChar = 'O'
    } else {
      firstChar = 'O'
      nextChar = 'X'
    }
    let row = firstChar.repeat(Math.ceil(columns / 2)).split``.join(nextChar)
      .split``
    if (row.length != columns) row.push(nextChar)
    return row
  })
}
