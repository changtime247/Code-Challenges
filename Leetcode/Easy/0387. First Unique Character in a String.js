/*
387. First Unique Character in a String
Easy
7.1K
234
Companies
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.\kumite
*/

/*
Given a string
Return index of value of first non-repeating char. If none exists, return -1.
Iterate through string. 
    At each iteration check if index of that char is equal to last index of that char.
        If so, return that index.
If none, return -1
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  }
  return -1
}
