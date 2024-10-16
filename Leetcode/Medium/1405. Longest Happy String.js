/*
1405. Longest Happy String
Medium

A string s is called happy if it satisfies the following conditions:

s only contains the letters 'a', 'b', and 'c'.
s does not contain any of "aaa", "bbb", or "ccc" as a substring.
s contains at most a occurrences of the letter 'a'.
s contains at most b occurrences of the letter 'b'.
s contains at most c occurrences of the letter 'c'.
Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

A substring is a contiguous sequence of characters within a string.

Example 1:
Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.

Example 2:
Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It is the only correct answer in this case.

Constraints:
0 <= a, b, c <= 100
a + b + c > 0
*/

/*
Given three numbers: a, b, and c.
Return the longest possible happy string such that:
  - s only contains the letters 'a', 'b', and 'c'.
  - s does not contain any of "aaa", "bbb", or "ccc" as a substring.
  - s contains at most a occurrences of the letter 'a'.
  - s contains at most b occurrences of the letter 'b'.
  - s contains at most c occurrences of the letter 'c'.
Example:
longestDiverseString(100,2,2), "aabaacaabaacaa"
longestDiverseString(100,1,1), "aabaacaa"
longestDiverseString(5,4,3), "aababcabcabc"
If the difference between twice the sum of two numbers and the remaining number is greater than two, the third number can be set to twice the sum.
Initialize an empty string, s.
Create a loop to add to s from greatest to least.
If two of the same letter is added, add a different letter.
Return s.
*/

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let s = ''
  if (2 * (a + b) + 2 < c) c = 2 * (a + b) + 2
  if (2 * (a + c) + 2 < b) b = 2 * (a + c) + 2
  if (2 * (b + c) + 2 < a) a = 2 * (b + c) + 2
  const addA = () => {
    if (a > 0) {
      s += 'a'
      a -= 1
    }
  }
  const addB = () => {
    if (b > 0) {
      s += 'b'
      b -= 1
    }
  }
  const addC = () => {
    if (c > 0) {
      s += 'c'
      c -= 1
    }
  }
  while (a + b + c > 0) {
    if (Math.max(a, b, c) == a) addA()
    else if (Math.max(a, b, c) == b) addB()
    else if (Math.max(a, b, c) == c) addC()
    let l = s.slice(-2)
    if (l == 'aa')
      if (Math.max(b, c) == b) addB()
      else addC()
    if (l == 'bb')
      if (Math.max(a, c) == a) addA()
      else addC()
    if (l == 'cc')
      if (Math.max(a, b) == b) addB()
      else addA()
  }
  return s
}
