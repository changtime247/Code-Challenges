/*
1572. Matrix Diagonal Sum
Easy
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

Example 1:
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

Example 2:
Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8

Example 3:
Input: mat = [[5]]
Output: 5

Constraints:
n == mat.length == mat[i].length
1 <= n <= 100
1 <= mat[i][j] <= 100
*/

/*
Given a square matrix.
Return the sum of all the values in the diagonal portions of the matrix (do not count a value at any particular index twice)
See above for examples.
Create a variable initialized to 0.
Iterate from outer subarrays toward center subarray.
    At each iteration, add corresponding values to the variable (e.g. outermost values from outermost subarray towards center).
*/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let total = 0
  for (let i = 0; i < mat.length / 2; i++) {
    if (i == mat.length - 1 - i) total += mat[i][i]
    else {
      total += mat[i][i] + mat[i][mat.length - 1 - i]
      total +=
        mat[mat.length - 1 - i][i] + mat[mat.length - 1 - i][mat.length - 1 - i]
    }
  }
  return total
}
