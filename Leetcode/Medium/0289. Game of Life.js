/*
289. Game of Life
Medium
5.5K
478
Companies
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Example 1:
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]

Constraints:
m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.

Follow up:
Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?
*/

/*
Given an array of subarrays (m x n board) consisting of 0s or 1s (0 being dead and 1 being alive).
Modify the array such that one turn of the game is played. 
Game rules (i.e. played as such):
    Any live cell with fewer than two live neighbors dies as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population.
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
First create a deep-copy of the array (not a shallow one otherwise, we cannot properly check rules since board would be continuously modified)
Using two loops, iterate through the deep copy.
    The outer loop loops through main array
    The inner loop loops through all subarrays
    Thereby we are going through each cell (i.e. subarray value)
        Within inner loop (check (i.e. combine values) of the surrouding cells):
            If live,
                check conditions to see if it will stay alive or die
            If dead,
                check conditions to see if it will come alive or stay dead
            Modify accordingly
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const origState = JSON.parse(JSON.stringify(board))
  const m = board.length
  const n = board[0].length
  for (let i = 0; i < m; i++) {
    const prevRow = origState[i - 1]
    const currRow = origState[i]
    const nextRow = origState[i + 1]
    for (let j = 0; j < n; j++) {
      const n1 = (prevRow && prevRow[j - 1] && prevRow[j - 1]) || null
      const n2 = (prevRow && prevRow[j] && prevRow[j]) || null
      const n3 = (prevRow && prevRow[j + 1] && prevRow[j + 1]) || null
      const n4 = currRow[j - 1] || null
      const n5 = currRow[j + 1] || null
      const n6 = (nextRow && nextRow[j - 1] && nextRow[j - 1]) || null
      const n7 = (nextRow && nextRow[j] && nextRow[j]) || null
      const n8 = (nextRow && nextRow[j + 1] && nextRow[j + 1]) || null
      const combined = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8
      if (origState[i][j] === 1) {
        combined < 2 || combined > 3 ? (board[i][j] = 0) : (board[i][j] = 1)
      } else if (origState[i][j] === 0) {
        if (combined === 3) board[i][j] = 1
      }
    }
  }
  return board
}
