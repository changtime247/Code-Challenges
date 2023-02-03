/*
6. Zigzag Conversion
Medium
5.3K
11.2K
Companies
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"

Constraints:
1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/

/*
Given a string and a number, n, representing the number of rows according to which the string should be zigzaged.
Return zigzaged string.
Create an array of n subarrays (which will correspond to row # - converting row 1 to index 0; row 2 to index 1, etc.).
Iterate through string.
  At each iteration, push i-th char into corresponding subarray
Join contents of subarrays and return as string.
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, n) {
  if (n === 1) return s
  let arr = Array.from({ length: n }, (a) => [])
  let count = 0
  let incrementing = true
  for (let i = 0; i < s.length; i++) {
    arr[count].push(s[i])
    if (incrementing && count < n - 1) {
      count++
    } else {
      count--
    }
    if (count === n - 1) incrementing = false
    if (count === 0) incrementing = true
  }
  return [].concat(...arr).join``
}
