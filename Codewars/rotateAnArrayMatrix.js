// 5 kyu
// Rotate an array matrix
// Write a rotate function that rotates a two-dimensional array (a matrix) either clockwise or anti-clockwise by 90 degrees, and returns the rotated array.
// The function accepts two parameters: an array, and a string specifying the direction or rotation. The direction will be either "clockwise" or "counter-clockwise".
// Here is an example of how your function will be used:
// var matrix = [[1, 2, 3],
//               [4, 5, 6],
//               [7, 8, 9]];
// rotate(matrix, "clockwise"); // Would return  [[7, 4, 1], [8, 5, 2],  [9, 6, 3]]
// To help you visualize the rotated matrix, here it is formatted as a grid:
//  [[7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]]
// Rotated counter-clockwise it would looks like this:
//  [[3, 6, 9],
//   [2, 5, 8],
//   [1, 4, 7]]

// Given an array of subarrays of various values and a string of either 'clockwise' or 'counter-clockwise'.
// Return a new array derived from corresponding rotation.
// Ex:
// Example 1 (equal numbers of rows/cols):
// matrix = [[1,2,3],[4,5,6],[7,8,9]];
// rotate(matrix, 'counter-clockwise'), [[3,6,9],[2,5,8],[1,4,7]]
// rotate(matrix, 'clockwise'), [[7,4,1],[8,5,2],[9,6,3]]
// rotate(rotate(matrix, 'counter-clockwise'), 'clockwise'), [[1,2,3],[4,5,6],[7,8,9]]
// rotate(rotate(rotate(rotate(matrix, 'clockwise'), 'clockwise'), 'clockwise'), 'clockwise'), [[1,2,3],[4,5,6],[7,8,9]]
// Example 2 (unequal number of rows/cols):
// matrix = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
// deepEqual(rotate(matrix, 'counter-clockwise'), [[3,6,9,12],[2,5,8,11],[1,4,7,10]]
// deepEqual(rotate(matrix, 'clockwise'), [[10,7,4,1],[11,8,5,2],[12,9,6,3]]
// Example 3 (only one row/col):
// matrix = [[1,2,3]];
// rotate(matrix, 'counter-clockwise'), [[3],[2],[1]]
// rotate(matrix, 'clockwise'), [[1],[2],[3]]
// rotate(rotate(matrix, 'clockwise'), 'clockwise'), [[3,2,1]]
// Example 4 (single cell matrix):
// matrix = [[1]];
// rotate(matrix, 'counter-clockwise'), [[1]]
// Create empty variable, resArr, initialized to empty array.
// Use two for-loops to iterate through values to put value from arg-array to new location.
// Within outer loop, initialize a new variable to contain the new row of values to be put into resArr.
// If the direction is clockwise, then iterate from last to first row of arg-array.
// If the direction is counter-clockwise, then iterate from first to last row of arg-array.

function rotate(matrix, direction) {
  let resArr = []
  let clockwise = direction === 'clockwise' ? true : false
  for (let col = 0; col < matrix[0].length; col++) {
    let newRow = []
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[clockwise ? matrix.length - 1 - row : row][col])
    }
    clockwise ? resArr.push(newRow) : resArr.unshift(newRow)
  }
  return resArr
}
