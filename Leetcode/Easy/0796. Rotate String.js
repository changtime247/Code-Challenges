/*
796. Rotate String
Easy

Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.

Example 1:
Input: s = "abcde", goal = "cdeab"
Output: true

Example 2:
Input: s = "abcde", goal = "abced"
Output: false

Constraints:
1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.
*/

/*
Given a string, s, and another string, goal.
Return boolean indicating whether s equals goal if s is "rotated."
(Note: s being rotated means letters 0-to-i are shifted to s.length-1-to-end)
Ex:
rotateString("abc", "cba"), false
rotateString("abcdefg", "gfedcba"), false
rotateString("a", "a"), true
rotateString("ab", "ba"), true
rotateString("bbbacddceeb", "ceebbbbacdd"), true
Iterate through possible "rotations."
    If any iteration matches goal, return true.
After exhausting all iterations, return false.
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i) + s.slice(0, i) === goal) return true
  }
  return false
}
