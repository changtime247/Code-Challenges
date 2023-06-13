/*
2352. Equal Row and Column Pairs
Medium
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

Example 1:
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:
Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]

Constraints:
n == grid.length == grid[i].length
1 <= n <= 200
1 <= grid[i][j] <= 105
*/

/*
Given a n * n matrix.
Return the number of rows that are the same exact values in the same order as any given column.
Ex:
equalPairs([[3,2,1],[1,7,6],[2,7,7]]), 1
equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]), 3
equalPairs([[3,1,2,2],[1,4,4,4],[2,4,2,2],[2,5,2,2]]), 3
equalPairs([[13,13],[13,13]]), 4
Create two hash maps. One containing key-values of row and count of the number of appearances of such row. The other for the columns.
Create a variable initialized to 0 to tally up the number of intersections between rows and columns.
Iterate through the rows hash to count against the columns hash map.
(Note: even if the rows hash has many duplicates, if there is no corresponding key in columns hash, the count/tally will not increase.)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const rows = grid.reduce((a, c) => {
    a[c.join` `] = (a[c.join` `] || 0) + 1
    return a
  }, {})
  const cols = {}

  for (let r = 0; r < grid.length; r++) {
    let str = ''
    for (let c = 0; c < grid.length; c++) {
      str += `${grid[c][r]} `
    }
    str = str.trim()
    cols[str] = (cols[str] || 0) + 1
  }

  let count = 0
  for (const row in rows) {
    count += rows[row] * (cols[row] || 0)
  }

  return count
}
