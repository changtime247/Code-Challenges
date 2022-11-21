/*
392. Is Subsequence
Easy
6.3K
347
Companies
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
*/

/*
Given two strings, s and t. 
Return a boolean value indicating whether s is a subset of t and the order of chars in s respects the order of chars in t.
Iterate through s. At each iteration,
    if s's char is not within t
    or if s's overall char order does not respect the t's char order
        return false
    Before moving onto the next iteration, remember to only consider the latter portion of t (i.e. the subsequent letters from s[i])
Otherwise, return true
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let order = 0
  for (let i = 0; i < s.length; i++) {
    if (order <= t.indexOf(s[i])) {
      order = t.indexOf(s[i])
      t = t.slice(order + 1)
      order = 0
    } else {
      return false
    }
  }
  return true
}
